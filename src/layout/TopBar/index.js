import { useTopBarContext } from 'hooks/app/useTopBarContext';
import Logo from './components/Logo';
import SearchInput from './components/SearchInput';
import UserActions from './components/UserActions';
import DatePicker from './components/DatePicker';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const TopBar = () => {
  const { userSearchInput } = useTopBarContext();

  return (
    <header className="sticky top-0 z-50 p-5 grid grid-cols-3 bg-white shadow-md md:px-10">
      <Logo />
      <SearchInput />
      <UserActions />
      {userSearchInput && <DatePicker />}
    </header>
  );
};

export default TopBar;
