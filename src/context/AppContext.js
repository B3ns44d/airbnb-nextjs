import { createContext } from 'react';
import { childrenPropType } from 'shared/common/propTypes';

export const AppContext = createContext();

export const AppContextWrapper = ({ children }) => {
  const appState = {};

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};

AppContextWrapper.propTypes = {
  children: childrenPropType,
};
AppContextWrapper.defaultProps = { children: null };
