import { useContext } from "react";
import Dialog from "../common/Dialog";
import { GameContext } from "../../context/GameContext";

export default function BackConfirm() {

    const { backConfirmVis, setBackConfirmVis, holdGame } = useContext(GameContext)

    function handleCancel() {
        setBackConfirmVis(false)
    }

    function handleConfirm() {
        holdGame()
        setBackConfirmVis(false)
    }

    return (
        <Dialog isOpen={backConfirmVis} onClose={handleCancel} cancel={{ label: 'Cancel', onClick: handleCancel }} confirm={{ label: 'Go Home', onClick: handleConfirm }}>
            <div className="flex flex-col gap-y-3">
                <h1 className="text-3xl text-gray-700 dark:text-gray-300">
                    Are You Sure?
                </h1>

                <p className="text-lg leading-6 text-justify">
                    Do you really want to go home? You have not completed the game yet. Don't worry you will be able to resume it later.
                </p>
            </div>
        </Dialog>
    )
}
