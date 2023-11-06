import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import { Route, Routes, useLocation } from 'react-router-dom';
import Modal from '../Modal';
import StartPage from '../StartPage';
import PageError from '../PageError';
import { AppLayout } from '../AppLayout/AppLayout';

export const Main = () => {
  const location = useLocation();
  const isCategoryPage = location.pathname.includes('/category/') ||
    location.pathname.includes('/search');

  return (
    <main className={`${style.main} ${isCategoryPage ?
      style.noBackground : ''}`}>
      <Layout>
        <Tabs />
        <Routes>
          <Route path='/' element={<AppLayout />} />
          <Route path='/auth' element={<StartPage />} />
          <Route path='/category/:page' element={<List />}>
            <Route path='post/:id' element={<Modal />} />
          </Route>
          <Route path='/search' element={<List />}>
            <Route path='post/:id' element={<Modal />} />
          </Route>
          <Route path='*' element={<PageError />} />
        </Routes>
      </Layout>
    </main>
  );
};
