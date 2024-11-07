// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 z-10">
        <button 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
              {/* {children} */}
              {/* <h1>saas</h1> */}
              <img src="/popup.jpg" alt="" srcset="" className='w-full h-full' />
      </div>
    </div>
  );
};

export default Modal;
