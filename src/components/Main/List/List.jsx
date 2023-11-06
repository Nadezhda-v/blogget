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
  const [observeEndList, setObserveEndList] = useState(true);
  const autoLoadCount = useRef(0);
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

    autoLoadCount.current = 0;
    setObserveEndList(true);
    setShowButton(false);

    if (page) {
      dispatch(postsRequestAsync({ newPage: page }));
    } else {
      dispatch(postsRequestAsync({ search }));
    }
  }, [page, search]);

  useEffect(() => {
    if (autoLoadCount.current >= 2) {
      setShowButton(true);
      return;
    }

    if (!endList.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (autoLoadCount.current >= 2) {
        setObserveEndList(false);
      }

      if (page) {
        if (entries[0].isIntersecting) {
          autoLoadCount.current += 1;
          dispatch(postsRequestAsync({ newPage: page }));
        }
      } else {
        if (entries[0].isIntersecting && after) {
          autoLoadCount.current += 1;
          dispatch(postsRequestAsync({ search }));
        }
      }
    }, {
      rootMargin: '100px',
    });

    if (endList.current && observeEndList) {
      observer.observe(endList.current);
    } else {
      observer.unobserve(endList.current);
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

        {autoLoadCount.current < 2 && observeEndList ? (
          <li className={style.lastItem} ref={endList} />
        ) : <></>}
      </ul>

      {showButton && after ? (
        <div className={style.buttonWrapper}>
          <button
            className={style.button}
            onClick={() => {
              autoLoadCount.current = 0;
              if (page) {
                dispatch(postsRequestAsync({ newPage: page }));
              } else {
                dispatch(postsRequestAsync({ search }));
              }
            }}
          >
            Загрузить ещё
          </button>
        </div>
      ) : <></>}
      <Outlet />
    </>
  );
};
