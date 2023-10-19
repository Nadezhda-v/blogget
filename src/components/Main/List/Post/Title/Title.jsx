import style from './Title.module.css';
import PropTypes from 'prop-types';

export const Title = ({ title }) => (
  <h2 className={style.title}>
    <a className={style.linkPost} href='#post'>
      {title}
    </a>
  </h2>
);

Title.propTypes = {
  title: PropTypes.string,
};
