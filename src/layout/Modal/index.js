import { useModal } from 'hooks/app/useModal';
import { forwardRef } from 'react';

const Modal = (props, ref) => {
  const { hide } = useModal();
  return (
    <>
      <div
        ref={ref}
        className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
      >
        <div className="mt-2">
          <p className="text-sm text-gray-500">WIP: simple modal</p>
        </div>
        <div className="mt-4">
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={hide}
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Modal);
