import { motion } from "framer-motion"
import { useContext, useEffect, useRef, useState } from "react";
import { type DifficultyType, GameContext } from "../../context/GameContext";

export default function Difficulties() {

    const btnsContainerRef = useRef<HTMLDivElement | null>(null);
    const easyBtnRef = useRef<HTMLButtonElement | null>(null);
    const mediumBtnRef = useRef<HTMLButtonElement | null>(null);
    const hardBtnRef = useRef<HTMLButtonElement | null>(null);

    const { difficulty, setDifficulty } = useContext(GameContext);
    const [left, setLeft] = useState<number>(0);
    const [width, setWidth] = useState<string>('0');


    function onSwitch(val: DifficultyType) {
        setDifficulty(val);
    }

    useEffect(() => {

        var containerWidth = btnsContainerRef.current?.offsetWidth || 0;
        var easyBtnWidth = easyBtnRef.current?.offsetWidth || 0;
        var mediumBtnWidth = mediumBtnRef.current?.offsetWidth || 0;
        var hardBtnWidth = hardBtnRef.current?.offsetWidth || 0;

        if (difficulty === 0) {
            setLeft(easyBtnRef.current?.offsetLeft || 0)
            setWidth((easyBtnWidth / containerWidth) * 100 + '%')
        }

        if (difficulty === 1) {
            // setLeft('calc(30%)')
            setLeft(mediumBtnRef.current?.offsetLeft || 0)
            setWidth((mediumBtnWidth / containerWidth) * 100 + '%')
        }

        if (difficulty === 2) {
            // setLeft('66%')
            setLeft(hardBtnRef.current?.offsetLeft || 0)
            setWidth((hardBtnWidth / containerWidth) * 100 + '%')
        }


    }, [difficulty])

    return (
        <div className={`w-fit flex flex-col gap-y-4 border border-slate-300 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 text-slate-500 rounded-xl p-3`}>

            <label className={`text-base text-center text-slate-600 dark:text-slate-300 capitalize`}>select difficulty</label>

            <div ref={btnsContainerRef} className="relative flex p-2 rounded-xl flex-nowrap gap-x-2 bg-slate-300 text-slate-700 dark:text-white dark:bg-slate-700">
                <button ref={easyBtnRef} onClick={() => onSwitch(0)} className={`z-10 px-2 py-1 text-xs capitalize transition-all duration-300 ${difficulty === 0 && 'text-white'}`}>Easy</button>

                <button ref={mediumBtnRef} onClick={() => onSwitch(1)} className={`z-10 px-2 py-1 text-xs capitalize transition-all duration-300 ${difficulty === 1 && 'text-white'}`}>Medium</button>

                <button ref={hardBtnRef} onClick={() => onSwitch(2)} className={`z-10 px-2 py-1 text-xs capitalize transition-all duration-300 ${difficulty === 2 && 'text-white'}`}>Hard</button>

                <motion.div
                    // initial={{ left, width }}

                    // animate={{ right: difficulty === 0 ? 'auto' : '0.25rem', left: difficulty === 0 ? '0.25rem' : 'auto' }}

                    className={`absolute z-0 px-3 py-1 text-xs transition-all duration-300 text-blue-900 bg-blue-900 rounded-lg inset-1 w-fit flex-center dark:bg-blue-600 dark:text-blue-600 ${difficulty === 0 ? '' : difficulty === 1 ? 'mx-auto' : 'ml-auto'}`}>
                    {difficulty === 0 && 'Easy'}
                    {difficulty === 1 && 'Medium'}
                    {difficulty === 2 && 'Hard'}
                </motion.div>
            </div>
        </div>

    );
}
