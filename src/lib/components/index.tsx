import { ReactNode, useContext } from 'react';

import AlertDialog from './Alert/AlertDialog';
import ConfirmDialog from './Confirm/ConfirmDialog';
import PromptDialog from './Prompt/PromptDialog';
import ConfirmContext from './Confirm/ConfirmContext';
import AlertContext from './Alert/AlertContext';
import PromptContext from './Prompt/PromptContext';

import './style.css'

export const useAlertConfirmPrompt = () => {
  const { alert } = useContext(AlertContext);
  const { confirm } = useContext(ConfirmContext);
  const { prompt } = useContext(PromptContext);

  return { alert, confirm, prompt };
};

export const AlertConfirmPromptProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AlertDialog>
      <ConfirmDialog>
        <PromptDialog>{children}</PromptDialog>
      </ConfirmDialog>
    </AlertDialog>
  );
};

