import { FormEvent, useEffect } from 'react';
import { useCheckLang } from '../useCheckLang';

interface Props {
  message: string;
  onClickOK: (result: string) => void;
  onClickCancel: () => void;
  options?: {
    title?: string;
    defaultValue?: string;
    placeholder?: string;
  };
}

const Prompt = ({ message, onClickOK, onClickCancel, options }: Props) => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      input: { value: string };
    };
    onClickOK(target.input.value);
  };

  return (
    <div className='dialog-container'>
      <div className='overlay' onClickCapture={(e) => e.stopPropagation()} />
      <form className='dialog' onSubmit={handleSubmit}>
        {options?.title && <h2 className='title'>{options.title}</h2>}
        <p className='text'>{message}</p>
        <input
          id='input'
          className='input'
          type='text'
          defaultValue={options?.defaultValue}
          placeholder={options?.placeholder}
          autoFocus
        />
        <div className='buttons'>
          <button type='button' className='cancel' onClick={onClickCancel}>
            {lang === 'ko' ? 'Cancel' : 'OK'}
          </button>
          <button type='submit' className='confirm'>
            {lang === 'ko' ? '확인' : 'OK'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Prompt;
