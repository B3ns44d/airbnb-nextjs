import { uniqueId } from 'lodash';
import MenuItem from 'shared/components/MenuItem/index';
import { Menu, Transition } from '@headlessui/react';
import { menuRoutes, transitionProperties } from './utils';

const ActionsMenu = () => {
  const { auth, main } = menuRoutes;
  return (
    <Transition {...transitionProperties}>
      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1">
          {auth.map(({ path, title }) => (
            <MenuItem path={path} title={title} key={uniqueId(title)} />
          ))}
        </div>
        <div className="px-1 py-1">
          {main.map(({ path, title }) => (
            <MenuItem path={path} title={title} key={uniqueId(title)} />
          ))}
        </div>
      </Menu.Items>
    </Transition>
  );
};

export default ActionsMenu;
