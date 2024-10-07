import { motion } from "framer-motion"
import { useContext, useState } from "react";
import { type TDifficulty, GameContext } from "../../context/GameContext";

export default function Difficulties() {

    const { difficulty, setDifficulty } = useContext(GameContext);
    const [left, setLeft] = useState(difficulty === 0 ? '0.75rem' : difficulty === 1 ? '.25rem' : '10.25rem')
    const [width, setWidth] = useState(difficulty === 0 ? '3.5rem' : difficulty === 1 ? '6rem' : '4rem')

    function setStyles(type: TDifficulty) {
        switch (type) {
            case 0:
                setWidth('3.5rem')
                setLeft('0.75rem')
                break;
            case 1:
                setWidth('6rem')
                setLeft('4.25rem')
                break;
            case 2:
                setWidth('4rem')
                setLeft('10.25rem')
                break;

            default:
                break;
        }
    }

    function onSwitch(val: TDifficulty) {
        setDifficulty(val);
        setStyles(val)
    }

    return (
        <div className={`w-fit mx-auto mt-44 flex flex-col gap-y-4`}>

            <label className={`text-3xl text-center text-slate-600 dark:text-slate-300 capitalize`}>select difficulty</label>

            <div className="relative flex p-3 rounded-3xl flex-nowrap text-slate-700 dark:text-white bg-container">
                <button onClick={() => onSwitch(0)} className={`z-10 rounded-xl w-14 py-1 text-lg capitalize transition-all duration-300 ${difficulty === 0 && 'text-white'}`}>Easy</button>

                <button onClick={() => onSwitch(1)} className={`z-10  rounded-xl w-24 py-1 text-lg capitalize transition-all duration-300 ${difficulty === 1 && 'text-white'}`}>Medium</button>

                <button onClick={() => onSwitch(2)} className={`z-10  rounded-xl w-16 py-1 text-lg capitalize transition-all duration-300 ${difficulty === 2 && 'text-white'}`}>Hard</button>


                <motion.div
                    initial={{ left, width }}
                    animate={{ left, width }}
                    className={`absolute bg-blue-800 inset-3 dark:bg-blue-600 rounded-xl`}>

                </motion.div>
            </div>
        </div >

    );
}
