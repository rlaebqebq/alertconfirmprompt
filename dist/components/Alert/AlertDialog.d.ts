import { ReactNode } from 'react';
export type AlertState = {
    message: string;
    onClose: () => void;
    options?: {
        title?: string;
    };
};
declare const AlertDialog: ({ children }: {
    children: ReactNode;
}) => import("react").JSX.Element;
export default AlertDialog;
