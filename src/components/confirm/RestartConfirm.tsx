import { useContext } from "react";
import Dialog from "../common/Dialog";
import { GameContext } from "../../context/GameContext";

export default function RestartConfirm() {

    const { restartConfirmVis, setRestartConfirmVis, startGame } = useContext(GameContext)

    function handleCancel() {
        setRestartConfirmVis(false)
    }

    function handleConfirm() {
        startGame()
        setRestartConfirmVis(false)
    }

    return (
        <Dialog isOpen={restartConfirmVis} onClose={handleCancel} cancel={{ label: 'Cancel', onClick: handleCancel }} confirm={{ label: 'Yes, Restart', onClick: handleConfirm }}>
            <div className="flex flex-col gap-y-3">
                <h1 className="text-3xl text-gray-700 dark:text-gray-300">
                    Are You Sure?
                </h1>

                <p className="text-lg leading-6 text-justify">
                    Do you really want to restart the game?
                </p>
            </div>
        </Dialog>
    )
}
