import Modal from "./Modal";

type DialogProps = {
    children: JSX.Element;
    isOpen: boolean;
    onClose: () => void;
    cancel: {
        label: string;
        onClick: () => void;
    };
    confirm: {
        label: string;
        onClick: () => void;
    };
}

export default function Dialog({ children, isOpen, onClose, cancel, confirm }: DialogProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col p-10 gap-y-6">

                {children}

                <div className="flex gap-x-2">
                    <button onClick={confirm.onClick} className="container text-lg text-white flex-center bg-emerald-500">{confirm.label}</button>
                    <button onClick={cancel.onClick} className="container text-lg text-white bg-gray-500 flex-center">{cancel.label}</button>
                </div>
            </div>
        </Modal>
    )
}
