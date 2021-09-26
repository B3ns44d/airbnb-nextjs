import { createContext, useState } from 'react';
import { childrenPropType } from 'shared/common/propTypes';

export const TopBarContext = createContext();

export const TopBarContextWrapper = ({ children }) => {
  const [userSearchInput, setUserSearchInput] = useState('');
  const [guessesNumber, setGuessesNumber] = useState(0);

  const value = {
    userSearchInput,
    setUserSearchInput,
    guessesNumber,
    setGuessesNumber,
  };

  return (
    <TopBarContext.Provider value={value}>{children}</TopBarContext.Provider>
  );
};

TopBarContextWrapper.propTypes = {
  children: childrenPropType,
};
TopBarContextWrapper.defaultProps = { children: null };
