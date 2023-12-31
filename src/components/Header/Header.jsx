import style from './Header.module.css';
import Layout from '../Layout';
import Logo from '../Header/Logo';
import Heading from './Heading';
import Search from '../Header/Search';
import Auth from '../Header/Auth';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading text='Главная' />
        <Search />
        <Auth />
      </div>
    </Layout>
  </header>
);
