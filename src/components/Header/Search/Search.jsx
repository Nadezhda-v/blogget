import style from './Search.module.css';
import { SvgIcon } from '../../../UI/Svg';
import { useDispatch } from 'react-redux';
import { postsRequestAsync } from '../../../store/posts/postsAction';
import { useLocation, useNavigate } from 'react-router-dom';
import { postsSlice } from '../../../store/posts/postsSlice';
import { useEffect, useState } from 'react';

export const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState('');
  const isSearchPage = location.pathname === '/search';

  useEffect(() => {
    !isSearchPage && setSearch('');
  }, [isSearchPage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postsSlice.actions.postsClear());

    if (search) {
      dispatch(postsSlice.actions.setSearch(search));
      dispatch(postsRequestAsync({ search }));
    }

    if (!isSearchPage) {
      navigate('/search');
    }
  };

  const handleTextSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setSearch('');
    dispatch(postsSlice.actions.setSearch(search));
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.search}
          type='search'
          onChange={handleTextSearch}
          value={search}
        />

        <button className={`${style.button} ${style.buttonClear}`}
          onClick={handleClearSearch}
          type='button'
        >
          <SvgIcon className={style.svg} src='../../img/header/clear.svg' />
        </button>
      </form>

      <button className={`${style.button} ${style.buttonSubmit}`}
        onClick={handleSubmit}
        type='submit'
      >
        <SvgIcon className={`${style.svg} ${style.svgSearch}`}
          src='../../img/header/search.svg' />
      </button>
    </div>
  );
};
