import { Menu } from '@headlessui/react';
import ActionButton from './ActionButton';
import ChangeLang from './ChangeLang';
import ActionsMenu from './Menu';

const UserActions = () => (
  <div className="flex items-center justify-end text-gray-500 space-x-4">
    <p className="hidden md:inline cursor-pointer">Become a host</p>
    <ChangeLang />
    <Menu as="div" className="relative inline-block text-left">
      <ActionButton />
      <ActionsMenu />
    </Menu>
  </div>
);

export default UserActions;
