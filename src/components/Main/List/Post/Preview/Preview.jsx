import style from './Preview.module.css';
import notPhoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Preview = ({ thumbnail, title }) => {
  const regURL = /^https?:\/\//;
  const imgURL = regURL.test(thumbnail) ? thumbnail : notPhoto;

  return <img src={imgURL} className={style.img} alt={title} />;
};

Preview.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};

