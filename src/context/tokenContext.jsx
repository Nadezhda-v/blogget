import React from 'react';
import PropTypes from 'prop-types';
import { useToken } from '../hooks/useToken';

const tokenContext = React.createContext({});

const TokenContextProvider = ({ children }) => {
  const [token, delToken] = useToken('');

  return (
    <tokenContext.Provider value={{ token, delToken }}>
      {children}
    </tokenContext.Provider>
  );
};

TokenContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  tokenContext,
  TokenContextProvider,
};
