import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = {
    avatar: '',
    title: 'Title',
    author: 'Nickname',
    ups: 10,
    date: '2023-10-19T19:08:00.000Z'
  };

  return (
    <ul className={style.list}>
      <Post postData={postData}/>
    </ul>
  );
};
