import style from './Author.module.css';
import PropTypes from 'prop-types';

export const Author = ({ author }) => (
  <a className={style.linkAuthor} href='#author'>
    {author}
  </a>
);

Author.propTypes = {
  author: PropTypes.string,
};
