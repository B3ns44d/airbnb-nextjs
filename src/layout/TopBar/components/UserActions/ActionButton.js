import { MenuIcon, UserCircleIcon } from '@heroicons/react/solid';
import { Menu } from '@headlessui/react';

const ActionButton = () => (
  <Menu.Button className="inline-flex justify-center w-full space-x-2 border-2 p-2 rounded-full cursor-pointer px-4 py-2">
    <MenuIcon className="h-6" />
    <UserCircleIcon className="h-6" />
  </Menu.Button>
);

export default ActionButton;
