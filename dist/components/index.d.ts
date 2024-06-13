import { ReactNode } from 'react';
import './style.css';
export declare const useAlertConfirmPrompt: () => {
    alert: (message: string, options?: {
        title?: string | undefined;
    } | undefined) => Promise<undefined>;
    confirm: (message?: string | undefined, options?: {
        title?: string | undefined;
    } | undefined) => Promise<boolean>;
    prompt: (message?: string | undefined, options?: {
        title?: string | undefined;
        defaultValue?: string | undefined;
        placeholder?: string | undefined;
    } | undefined) => Promise<string | null>;
};
export declare const AlertConfirmPromptProvider: ({ children }: {
    children: ReactNode;
}) => import("react").JSX.Element;
