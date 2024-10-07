import { useContext } from "react"
import { GameContext } from "../../context/GameContext";

export default function Keyboard() {


    const { unChooseChar, chooseChar, gameData } = useContext(GameContext);

    const { shuffledChars, playerGuess, difficulty } = gameData


    const handleCharClick = (char: string, index: number) => {

        if (isSelected(char, index)) {
            unChooseChar(index)
            return
        }

        chooseChar(char, index);
    }

    function isSelected(char: string, index: number) {
        return playerGuess.some(guess => guess.char === char && guess.index === index);
    }

    return (
        <div className={`grid ${difficulty === 2 ? 'grid-cols-7' : 'grid-cols-6'} gap-2 p-3 bg-container rounded-3xl`}>

            {shuffledChars.map((char, index) => (
                <button onClick={() => handleCharClick(char, index)} key={index} className={`col-span-1 font-sans capitalize text-xl aspect-square rounded-xl flex-center ${isSelected(char, index) ? "bg-emerald-400" : 'bg-gray-100 dark:bg-gray-800'}`}>
                    {char}
                </button>
            ))}

        </div>
    )
}

// 