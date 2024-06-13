import { ReactNode } from 'react';
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
declare const PromptDialog: ({ children }: {
    children: ReactNode;
}) => import("react").JSX.Element;
export default PromptDialog;
