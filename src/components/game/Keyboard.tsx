import { useContext } from "react"
import { GameContext } from "../../context/GameContext";

export default function Keyboard() {


    const { unChooseChar, chooseChar, shuffledChars, playerGuess } = useContext(GameContext);


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
        <div className="grid w-full grid-cols-5 gap-2">

            {shuffledChars.map((char, index) => (
                <button onClick={() => handleCharClick(char, index)} key={index} className={`col-span-1 font-mono capitalize  text-7xl aspect-square rounded-3xl flex-center ${isSelected(char, index) ? "bg-green-500" : 'bg-gray-200 dark:bg-gray-800'}`}>
                    {char}
                </button>
            ))}

        </div>
    )
}

// 