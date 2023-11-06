import style from './Preview.module.css';
import notPhoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Preview = ({ thumbnail, title }) => {
  const [isImageLoadError, setIsImageLoadError] = useState(false);
  const regURL = /^https?:\/\//;
  const imgURL = regURL.test(thumbnail) ? thumbnail : notPhoto;

  return (
    <img
      src={isImageLoadError ? notPhoto : imgURL}
      className={style.img}
      alt={title}
      onError={() => setIsImageLoadError(true)}
    />
  );
};

Preview.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
