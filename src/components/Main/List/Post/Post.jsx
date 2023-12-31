import style from './Post.module.css';
import PropTypes from 'prop-types';
import Preview from './Preview';
import Author from './Author';
import Raiting from './Raiting';
import Title from './Title';
import Date from './Date';

export const Post = ({ postData }) => {
  const {
    thumbnail,
    title,
    author,
    ups,
    created: date,
    id,
  } = postData;


  return (
    <li className={style.post}>
      <Preview thumbnail={thumbnail} title={title} />

      <div className={style.content}>
        <Title title={title} id={id} />
        <Author author={author} />
      </div>

      <Raiting ups={ups} />
      <Date date={date} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
