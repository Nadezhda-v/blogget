import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      preview: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 10,
      date: '2023-10-19T19:08:00.000Z',
      id: 78855,
    },
    {
      preview: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 15,
      date: '2023-10-20T15:01:00.000Z',
      id: 12428,
    },
    {
      preview: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 20,
      date: '2023-10-18T09:18:00.000Z',
      id: 75825,
    },
  ];

  return (
    <ul className={style.list}>{
      postsData.map(postData => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
