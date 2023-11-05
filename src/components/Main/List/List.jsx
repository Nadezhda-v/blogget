import style from './List.module.css';
import Post from './Post';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequestAsync } from '../../../store/posts/postsAction';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { postsSlice } from '../../../store/posts/postsSlice';
import { LIST } from '../Tabs/Tabs';

export const List = () => {
  const posts = useSelector((state) => state.posts.data);
  const after = useSelector((state) => state.posts.after);
  const search = useSelector((state) => state.posts.search);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();
  const [autoLoadCount, setAutoLoadCount] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (page) {
      const isValidPage = (page) => LIST.some(item => item.link === page);

      if (!isValidPage(page)) {
        navigate('*');
      }

      dispatch(postsSlice.actions.changePage(page));
    }

    setAutoLoadCount(0);
    setShowButton(false);
    dispatch(postsRequestAsync({ newPage: page, search }));
  }, [page, search]);

  useEffect(() => {
    if (autoLoadCount >= 2) {
      setShowButton(true);
    }

    if (!endList.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (autoLoadCount >= 2) {
        observer.unobserve(endList.current);
      }

      if (entries[0].isIntersecting) {
        setAutoLoadCount((prevCount) => prevCount + 1);
        if (page) {
          dispatch(postsRequestAsync({ newPage: page }));
        } else {
          dispatch(postsRequestAsync({ search }));
        }
      }
    }, {
      rootMargin: '100px',
    });

    if (endList.current) {
      observer.observe(endList.current);
    }

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {posts && posts.map(({ data }) => (
          <Post key={data.id} postData={data} />
        ))}

        {autoLoadCount < 2 && (
          <li className={style.lastItem} ref={endList} />
        )}
      </ul>

      {showButton && after ? (
        <div className={style.buttonWrapper}>
          <button
            className={style.button}
            onClick={() => dispatch(postsRequestAsync({}))}
          >
            Загрузить ещё
          </button>
        </div>
      ) : <></>}
      <Outlet />
    </>
  );
};
