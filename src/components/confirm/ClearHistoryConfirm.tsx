import { useContext } from "react";
import Dialog from "../common/Dialog";
import { clearGameHistory } from "../../helpers/helpers";
import { AppContext } from "../../context/AppContext";

export default function ClearHistoryConfirm() {

    const { clearHistoryConfirmVis, setClearHistoryConfirmVis } = useContext(AppContext)

    function handleCancel() {
        setClearHistoryConfirmVis(false)
    }

    function handleConfirm() {
        clearGameHistory()
        setClearHistoryConfirmVis(false)
    }

    return (
        <Dialog isOpen={clearHistoryConfirmVis} onClose={handleCancel} cancel={{ label: 'Cancel', onClick: handleCancel }} confirm={{ label: 'Erase History', onClick: handleConfirm }}>
            <div className="flex flex-col gap-y-3">
                <h1 className="text-3xl text-gray-700 dark:text-gray-300">
                    Are You Sure?
                </h1>

                <p className="text-lg leading-6 text-justify">
                    Your game history will be cleared for ever.
                </p>
            </div>
        </Dialog>
    )
}
