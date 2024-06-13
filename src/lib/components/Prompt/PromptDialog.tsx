import { ReactNode, useCallback, useMemo, useState } from 'react';

import Prompt from './Prompt';
import PromptContext from './PromptContext';

export type PromptState = {
  message: string;
  onClickOK: (result: string) => void;
  onClickCancel: () => void;
  options?: {
    title?: string;
    defaultValue?: string;
    placeholder?: string;
  };
};

const PromptDialog = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<PromptState>();

  const prompt = useCallback(
    (
      message?: string,
      options?: { title?: string; defaultValue?: string; placeholder?: string },
    ): Promise<string | null> => {
      return new Promise((resolve) => {
        setState({
          message: message ?? '',
          onClickOK: (result: string) => {
            setState(undefined);
            resolve(result);
          },
          onClickCancel: () => {
            setState(undefined);
            resolve(null);
          },
          options: {
            title: options?.title !== undefined ? `${options?.title}` : undefined,
            defaultValue: options?.defaultValue !== undefined ? `${options?.defaultValue}` : undefined,
            placeholder: options?.placeholder !== undefined ? `${options?.placeholder}` : undefined,
          },
        });
      });
    },
    [],
  );

  return (
    <PromptContext.Provider value={useMemo(() => ({ prompt }), [prompt])}>
      {children}
      {state && (
        <Prompt
          message={state.message}
          onClickOK={state.onClickOK}
          onClickCancel={state.onClickCancel}
          options={state.options}
        />
      )}
    </PromptContext.Provider>
  );
};

export default PromptDialog;
