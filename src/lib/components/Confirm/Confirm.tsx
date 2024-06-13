import { useEffect } from 'react';
import { useCheckLang } from 'component/lib/components/useCheckLang';

interface Props {
  message: string;
  onClickOK: () => void;
  onClickCancel: () => void;
  options?: {
    title?: string;
  };
}

const Confirm = ({ message, onClickOK, onClickCancel, options }: Props) => {
  const lang = useCheckLang();
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
          <button type='button' className='cancel' onClick={onClickCancel}>
            {lang === 'ko' ? 'Cancel' : 'OK'}
          </button>
          <button type='button' className='confirm' onClick={onClickOK} autoFocus>
            {lang === 'ko' ? '확인' : 'OK'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
