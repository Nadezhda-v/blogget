import style from './Preview.module.css';
import notPhoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Preview = ({ title }) => (
  <img className={style.img} src={notPhoto} alt={title} />
);

Preview.propTypes = {
  title: PropTypes.string,
};

