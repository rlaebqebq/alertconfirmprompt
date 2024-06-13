import { useCallback, useMemo, useState } from 'react';
import Confirm from './Confirm';
import ConfirmContext from './ConfirmContext';

type ConfirmState = {
  message: string;
  onClickOK: () => void;
  onClickCancel: () => void;
  options?: {
    title?: string;
  };
};

const ConfirmDialog = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<ConfirmState>();

  const confirm = useCallback((message?: string, options?: { title?: string }): Promise<boolean> => {
    return new Promise((resolve) => {
      setState({
        message: message ?? '',
        onClickOK: () => {
          setState(undefined);
          resolve(true);
        },
        onClickCancel: () => {
          setState(undefined);
          resolve(false);
        },
        options: {
          title: options?.title !== undefined ? `${options?.title}` : undefined,
        },
      });
    });
  }, []);

  return (
    <ConfirmContext.Provider value={useMemo(() => ({ confirm }), [confirm])}>
      {children}
      {state && (
        <Confirm
          message={state.message}
          onClickOK={state.onClickOK}
          onClickCancel={state.onClickCancel}
          options={{ title: state?.options?.title }}
        />
      )}
    </ConfirmContext.Provider>
  );
};

export default ConfirmDialog;
