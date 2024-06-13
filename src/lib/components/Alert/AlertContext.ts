import { createContext } from 'react';

type Type = {
  alert: (message: string, options?: { title?: string }) => Promise<undefined>;
};

const AlertContext = createContext<Type>({
  alert: () =>
    new Promise((_, reject) => {
      reject();
    }),
});

export default AlertContext;
