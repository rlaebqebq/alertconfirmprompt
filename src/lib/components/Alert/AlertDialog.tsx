import { ReactNode, useCallback, useMemo, useState } from 'react';

import Alert from './Alert';
import AlertContext from './AlertContext';

export type AlertState = {
  message: string;
  onClose: () => void;
  options?: {
    title?: string;
  };
};

const AlertDialog = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AlertState>();

  const alert = useCallback((message: string, options?: { title?: string }): Promise<undefined> => {
    return new Promise((resolve) => {
      setState({
        message: message !== undefined ? `${message}` : '',
        onClose: () => {
          setState(undefined);
          resolve(undefined);
        },
        options: {
          title: options?.title !== undefined ? `${options?.title}` : undefined,
        },
      });
    });
  }, []);

  return (
    <AlertContext.Provider value={useMemo(() => ({ alert }), [alert])}>
      {children}
      {state && <Alert options={{ title: state?.options?.title }} message={state.message} onClose={state.onClose} />}
    </AlertContext.Provider>
  );
};

export default AlertDialog;
