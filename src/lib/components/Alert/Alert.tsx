import { useEffect } from 'react';

import type { AlertState } from './AlertDialog';
import { useCheckLang } from '../useCheckLang';

const Alert = ({ message, onClose, options }: AlertState) => {
  const lang = useCheckLang();
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
          <button type='button' className='confirm' onClick={onClose} autoFocus>
            {lang === 'ko' ? '확인' : 'OK'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
