export const menuRoutes = {
  main: [
    {
      key: 2,
      title: 'Host your home',
      path: '/homes',
      roles: [],
    },
    {
      key: 3,
      title: 'Host an experience',
      path: '/experience',
      roles: [],
    },
    {
      key: 4,
      title: 'Help',
      path: '/help',
      roles: [],
    },
  ],
  auth: [
    {
      key: 0,
      title: 'Sign up',
      path: '/signup_login',
      roles: [],
    },
    {
      key: 1,
      title: 'Log in',
      path: '/login',
      roles: [],
    },
  ],
};

export const transitionProperties = {
  enter: 'transition ease-out duration-100',
  enterFrom: 'transform opacity-0 scale-95',
  enterTo: 'transform opacity-100 scale-100',
  leave: 'transition ease-in duration-75',
  leaveFrom: 'transform opacity-100 scale-100',
  leaveTo: 'transform opacity-0 scale-95',
};
