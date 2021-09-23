import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import UserActions from './components/UserActions';

const TopBar = () => (
  <header className="sticky top-0 z-50 p-5 grid grid-cols-3 bg-white shadow-md md:px-10">
    <Logo />
    <SearchBar />
    <UserActions />
  </header>
);

export default TopBar;
