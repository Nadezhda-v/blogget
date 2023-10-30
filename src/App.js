import Header from './components/Header';
import Main from './components/Main';
import { PostsContextProvider } from './context/postsContext';
import { updateToken } from './store/tokenReducer';
import { getToken } from './api/token';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <PostsContextProvider>
      <Header />
      <Main />
    </PostsContextProvider>
  );
};

export {
  App,
};
