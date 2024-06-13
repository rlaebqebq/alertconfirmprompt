import { useEffect } from 'react';

interface Props {
  message: string;
  onClickOK: () => void;
  onClickCancel: () => void;
  options?: {
    title?: string;
  };
}

const Confirm = ({ message, onClickOK, onClickCancel, options }: Props) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClickCancel();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClickCancel]);

  return (
    <div className='dialog-container'>
      <div className='overlay' onClickCapture={(e) => e.stopPropagation()} />
      <div className='dialog'>
        {options?.title && <h2 className='title'>{options.title}</h2>}
        <div className='text'>{message}</div>
        <div className='buttons'>
          <button type='button' onClick={onClickCancel}>
            cancel
          </button>
          {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
          <button type='button' onClick={onClickOK} autoFocus>
            ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
