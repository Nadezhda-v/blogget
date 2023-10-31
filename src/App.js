import Header from './components/Header';
import Main from './components/Main';
import { updateToken } from './store/tokenReducer';
import { getToken } from './api/token';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export {
  App,
};
