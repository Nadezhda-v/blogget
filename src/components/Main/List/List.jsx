import style from './List.module.css';
import Post from './Post';
import usePosts from '../../../hooks/usePosts';
import Preloader from '../../../UI/Preloader';

export const List = () => {
  const { loading, posts } = usePosts();

  return (
    <ul className={style.list}>
      {loading ? (
        <Preloader color={'#cc6633'} size={60} />
      ) : (
        posts.length > 0 && posts.map(({ data }) => (
          <Post key={data.id} postData={data} />
        ))
      )}
    </ul>
  );
};
