import { Menu } from '@headlessui/react';
import ActionButton from './ActionButton';
import ChangeLang from './ChangeLang';
import ActionsMenu from './Menu';

const UserActions = () => (
  <div className="flex items-center justify-end text-gray-500 space-x-4">
    <div className="hidden md:inline items-center">
      <a
        className="inline-block py-2 px-3 hover:bg-gray-100 rounded-full"
        href="/host"
      >
        <div className="flex items-center relative cursor-pointer whitespace-nowrap">
          Become a host
        </div>
      </a>
    </div>
    <ChangeLang />
    <Menu as="div" className="relative inline-block text-left">
      <ActionButton />
      <ActionsMenu />
    </Menu>
  </div>
);

export default UserActions;
