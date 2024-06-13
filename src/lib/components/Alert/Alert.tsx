import { useEffect } from 'react';

import type { AlertState } from "./AlertDialog";

const Alert = ({ message, onClose, options }: AlertState) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className='dialog-container'>
      <div className='overlay' onClickCapture={(e) => e.stopPropagation()} />
      <div className='dialog'>
        {options?.title && <h2 className='title'>{options.title}</h2>}
        <div className='text'>{message}</div>
        <div className='buttons'>
          {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
          <button type='button' onClick={onClose} autoFocus>
            ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
