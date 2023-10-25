import style from './Header.module.css';
import Layout from '../Layout';
import Logo from '../Header/Logo';
import Heading from './Heading';
import Search from '../Header/Search';
import Auth from '../Header/Auth';
import PropTypes from 'prop-types';

export const Header = ({ token, delToken }) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading text='Главная' />
        <Search />
        <Auth token={token} delToken={delToken} />
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
