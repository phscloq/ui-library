import React from 'react';
import { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Dialog = ({ isOpen, onClose }: Props) => {
  const [showDialog, setShowDialog] = useState(isOpen);

  const handleClose = () => {
    setShowDialog(false);
    onClose();
  };

  return (
    <>
      {showDialog && (
        <div className="fixed z-10 flex items-center justify-center h-screen w-full md:h-auto md:w-64 bg-white shadow-xl">
          <div className="bg-white py-2 px-3 sm:px-6 lg:px-8 rounded-tls border border-solid border-gray-300">
            <p>Hello world!</p>
          </div>
          <button onClick={handleClose} className="text-sm text-gray-700 hover:text-gray-900">
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Dialog;