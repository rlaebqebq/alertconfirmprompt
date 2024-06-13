/// <reference types="react" />
type Type = {
    alert: (message: string, options?: {
        title?: string;
    }) => Promise<undefined>;
};
declare const AlertContext: import("react").Context<Type>;
export default AlertContext;
