import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { childrenPropType } from 'shared/common/propTypes';

const ModalContentWrapper = ({ children }) => (
  <div className="min-h-screen px-4 text-center">
    <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog.Overlay className="fixed inset-0" />
    </Transition.Child>
    <span className="inline-block h-screen align-middle" aria-hidden="true">
      &#8203;
    </span>
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {children}
    </Transition.Child>
  </div>
);

ModalContentWrapper.propTypes = {
  children: childrenPropType,
};
ModalContentWrapper.defaultProps = {
  children: null,
};

export default ModalContentWrapper;
