/// <reference types="react" />
type Type = {
    confirm: (message?: string, options?: {
        title?: string;
    }) => Promise<boolean>;
};
declare const ConfirmContext: import("react").Context<Type>;
export default ConfirmContext;
