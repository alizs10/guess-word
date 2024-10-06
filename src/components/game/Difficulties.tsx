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
    const [width, setWidth] = useState<string>('');


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
            setLeft(mediumBtnRef.current?.offsetLeft || 0)
            setWidth((mediumBtnWidth / containerWidth) * 100 + '%')
        }

        if (difficulty === 2) {
            setLeft(hardBtnRef.current?.offsetLeft || 0)
            setWidth((hardBtnWidth / containerWidth) * 100 + '%')
        }


    }, [difficulty])

    return (
        <div className={`w-fit mx-auto mt-44 flex flex-col gap-y-4`}>

            <label className={`text-3xl text-center text-slate-600 dark:text-slate-300 capitalize`}>select difficulty</label>

            <div ref={btnsContainerRef} className="relative flex p-3 rounded-3xl flex-nowrap gap-x-2 text-slate-700 dark:text-white bg-container">
                <button ref={easyBtnRef} onClick={() => onSwitch(0)} className={`z-10 px-2 py-1 text-lg capitalize transition-all duration-300 ${difficulty === 0 && 'text-white'}`}>Easy</button>

                <button ref={mediumBtnRef} onClick={() => onSwitch(1)} className={`z-10 px-2 py-1 text-lg capitalize transition-all duration-300 ${difficulty === 1 && 'text-white'}`}>Medium</button>

                <button ref={hardBtnRef} onClick={() => onSwitch(2)} className={`z-10 px-2 py-1 text-lg capitalize transition-all duration-300 ${difficulty === 2 && 'text-white'}`}>Hard</button>

                <motion.div
                    initial={false}
                    animate={{ width: width ? width : '23%', left: left ? left : 12 }}
                    className={`absolute z-0 px-3 py-1 text-lg text-blue-900 bg-blue-900 rounded-xl inset-2.5 flex-center dark:bg-blue-600 dark:text-blue-600`}>

                </motion.div>
            </div>
        </div>

    );
}
