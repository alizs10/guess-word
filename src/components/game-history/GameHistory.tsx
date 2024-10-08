import { Eraser, X } from "lucide-react";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { AnimatePresence, motion } from 'framer-motion'
import { getGameHistory } from "../../helpers/helpers";

export type TGameHistory = {
    id: number;
    word: string;
    difficulty: number;
    timer: number;
    guessCounter: number;
    score: number;
}

export default function GameHistory() {

    const { historyVis, setHistoryVis, setClearHistoryConfirmVis } = useContext(AppContext)

    let gameHistory: TGameHistory[] = getGameHistory(true);

    function handleClose() {
        setHistoryVis(false);
    }

    function handleClearHistoryClick() {
        setClearHistoryConfirmVis(true);
    }

    useEffect(() => {

        if (historyVis) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

    }, [historyVis])



    return (
        <AnimatePresence>
            {historyVis && (
                <motion.div
                    initial={{ top: '100%' }}
                    animate={{ top: '0' }}
                    exit={{ top: '100%' }}
                    transition={{ duration: 0.2, bounce: 'none' }}
                    className="fixed max-w-[600px] inset-0 left-1/2 -translate-x-1/2 w-full bg-white dark:bg-black z-[999] p-5 overflow-y-scroll">
                    <div className="flex-between">
                        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Game History</h1>

                        <button onClick={handleClose} className="p-2 text-gray-700 rounded-xl dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
                            <X size={25} />
                        </button>
                    </div>

                    {gameHistory.length > 0 ? (
                        <table className="table w-full mt-10 ">

                            <thead>
                                <tr className="text-xs text-left sm:text-sm">
                                    <th className="px-3 py-3">#</th>
                                    <th className="py-3 pl-3">Word</th>
                                    <th className="py-3 pl-3">Mode</th>
                                    {/* <th className="py-3 pl-3">Time(s)</th> */}
                                    {/* <th className="py-3 pl-3">Guess</th> */}
                                    <th className="py-3 pl-3">Score</th>
                                </tr>
                            </thead>

                            <tbody>
                                {gameHistory.map((game, index) => (
                                    <tr key={game.id} className="text-sm sm:text-base odd:bg-gray-100 dark:odd:bg-gray-900">
                                        <td className="px-3 py-3">{index + 1}</td>
                                        <td className="py-3 pl-3 uppercase">{game.word}</td>
                                        <td className="py-3 pl-3">{game.difficulty === 0 ? 'Easy' : game.difficulty === 1 ? 'Medium' : 'Hard'}</td>
                                        {/* <td className="py-3 pl-3">{game.timer}</td> */}
                                        {/* <td className="py-3 pl-3">{game.guessCounter}</td> */}
                                        <td className="py-3 pl-3">{game.score.toFixed(1)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    ) : (
                        <div className="flex-col mt-10 flex-center gap-y-5">
                            <p className="text-gray-500 dark:text-gray-400">No game history found</p>
                        </div>
                    )}

                    {gameHistory.length > 0 && (
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, bounce: 'none' }}
                            onClick={handleClearHistoryClick}
                            className="px-5 py-2 mx-auto my-20 bg-gray-200 dark:bg-gray-800 rounded-xl flex-center gap-x-2">
                            <Eraser size={20} />
                            <span>Clear History</span>
                        </motion.button>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
