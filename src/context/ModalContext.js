import { createContext, useState, Fragment } from 'react';
import { childrenPropType } from 'shared/common/propTypes';
import { Dialog, Transition } from '@headlessui/react';
import ModalContentWrapper from 'shared/components/ModalContentWrapper';

export const ModalContext = createContext();

export const ModalContextWrapper = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);
  const toggle = () => setIsOpen((on) => !on);

  const value = {
    isOpen,
    show,
    hide,
    toggle,
  };

  return (
    <ModalContext.Provider value={value}>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={hide}
        >
          <ModalContentWrapper>{children}</ModalContentWrapper>
        </Dialog>
      </Transition>
    </ModalContext.Provider>
  );
};

ModalContextWrapper.propTypes = {
  children: childrenPropType,
};
ModalContextWrapper.defaultProps = { children: null };
