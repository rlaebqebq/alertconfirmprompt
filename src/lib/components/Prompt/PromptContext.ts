import { createContext } from 'react';

type Type = {
  prompt: (
    message?: string,
    options?: { title?: string; defaultValue?: string; placeholder?: string },
  ) => Promise<string | null>;
};

const PromptContext = createContext<Type>({
  prompt: () =>
    new Promise((_, reject) => {
      reject();
    }),
});

export default PromptContext;
