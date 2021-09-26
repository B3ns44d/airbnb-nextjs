import { useTopBarContext } from 'hooks/app/useTopBarContext';
import View from './View';

const SearchInput = () => {
  const { userSearchInput, setUserSearchInput } = useTopBarContext();

  const onUserSearchInputChange = ({ value }) => {
    setUserSearchInput(value);
  };

  return (
    <>
      <View
        userSearchInput={userSearchInput}
        onUserSearchInputChange={onUserSearchInputChange}
      />
    </>
  );
};

export default SearchInput;
