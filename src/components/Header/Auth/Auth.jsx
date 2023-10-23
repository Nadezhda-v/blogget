import style from './Auth.module.css';
import PropTypes from 'prop-types';
import { SvgIcon } from '../../../UI/Svg';

export const Auth = ({ auth }) => (
  <button className={style.button}>
    {auth ? auth :
      <SvgIcon
        src='./img/header/login.svg'
        className={style.svg}
      />
    }
  </button>
);

Auth.propTypes = {
  auth: PropTypes.bool,
};
