import style from './Search.module.css';
import { SvgIcon } from '../../../UI/Svg';

export const Search = () => (
  <form className={style.form}>
    <input className={style.search} type='search' />
    <button className={style.button}>
      <SvgIcon className={style.svg} src='./img/header/search.svg' />
    </button>
  </form>
);
