import Header from './components/Header';
import Main from './components/Main';
import { tokenContext } from './context/tokenContext';
import { useToken } from './hooks/useToken';

function App() {
  const [token, delToken] = useToken('');
  const { Provider } = tokenContext;

  return (
    <Provider value={{ token, delToken }}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
