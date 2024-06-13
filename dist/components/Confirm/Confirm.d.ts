/// <reference types="react" />
interface Props {
    message: string;
    onClickOK: () => void;
    onClickCancel: () => void;
    options?: {
        title?: string;
    };
}
declare const Confirm: ({ message, onClickOK, onClickCancel, options }: Props) => import("react").JSX.Element;
export default Confirm;
