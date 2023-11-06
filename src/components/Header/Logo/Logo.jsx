import style from './Logo.module.css';
import { SvgIcon } from '../../../UI/Svg';

export const Logo = () => (
  <a className={style.link} href='/'>
    <SvgIcon className={style.logo} src='./img/header/logo.svg' />
  </a>
);
