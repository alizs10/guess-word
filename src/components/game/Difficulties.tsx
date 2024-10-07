import { motion } from "framer-motion"
import { useContext, useEffect, useRef, useState } from "react";
import { type TDifficulty, GameContext } from "../../context/GameContext";

export default function Difficulties() {

    const { difficulty, setDifficulty } = useContext(GameContext);


    function onSwitch(val: TDifficulty) {
        setDifficulty(val);
    }

    return (
        <div className={`w-fit mx-auto mt-44 flex flex-col gap-y-4`}>

            <label className={`text-3xl text-center text-slate-600 dark:text-slate-300 capitalize`}>select difficulty</label>

            <div className="relative flex p-3 rounded-3xl flex-nowrap text-slate-700 dark:text-white bg-container gap-x-2">
                <button onClick={() => onSwitch(0)} className={`z-10 ${difficulty === 0 ? 'bg-blue-800 dark:bg-blue-600' : ''} rounded-xl px-2 py-1 text-lg capitalize transition-all duration-300 ${difficulty === 0 && 'text-white'}`}>Easy</button>

                <button onClick={() => onSwitch(1)} className={`z-10 ${difficulty === 1 ? 'bg-blue-800 dark:bg-blue-600' : ''} rounded-xl px-2 py-1 text-lg capitalize transition-all duration-300 ${difficulty === 1 && 'text-white'}`}>Medium</button>

                <button onClick={() => onSwitch(2)} className={`z-10 ${difficulty === 2 ? 'bg-blue-800 dark:bg-blue-600' : ''} rounded-xl px-2 py-1 text-lg capitalize transition-all duration-300 ${difficulty === 2 && 'text-white'}`}>Hard</button>

            </div>
        </div >

    );
}
