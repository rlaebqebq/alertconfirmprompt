/// <reference types="react" />
type Type = {
    prompt: (message?: string, options?: {
        title?: string;
        defaultValue?: string;
        placeholder?: string;
    }) => Promise<string | null>;
};
declare const PromptContext: import("react").Context<Type>;
export default PromptContext;
