/// <reference types="react" />
interface Props {
    message: string;
    onClickOK: (result: string) => void;
    onClickCancel: () => void;
    options?: {
        title?: string;
        defaultValue?: string;
        placeholder?: string;
    };
}
declare const Prompt: ({ message, onClickOK, onClickCancel, options }: Props) => import("react").JSX.Element;
export default Prompt;
