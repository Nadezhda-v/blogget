import style from './Avatar.module.css';
import notPhoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Avatar = ({ title }) => (
  <img className={style.img} src={notPhoto} alt={title} />
);

Avatar.propTypes = {
  title: PropTypes.string,
};

