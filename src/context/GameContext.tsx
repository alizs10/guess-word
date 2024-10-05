import { createContext, useEffect, useState } from "react";
import { shuffle } from "../helpers/helpers";

type GameStateType = "still" | "playing" | "won" | "lost";

type PlayerGuessType = {
    char: string;
    index: number;
    isCorrect: boolean;
    place: number;
}

type GameContextType = {
    gameState: GameStateType;
    setGameState: (state: GameStateType) => void;

    word: string;
    setWord: (word: string) => void;

    guessCounter: number;
    setGuessCounter: (value: number) => void;

    playerGuess: PlayerGuessType[];
    setPlayerGuess: (guess: PlayerGuessType[]) => void;

    chooseChar: (char: string, index: number) => void;
    unChooseChar: (index: number) => void;

    shuffledChars: string[];
    setShuffledChars: (chars: string[]) => void;

    startGame: () => void;
    guess: () => void;
}

const initialState: GameContextType = {
    gameState: "still",
    setGameState: () => { },

    word: "",
    setWord: () => { },

    guessCounter: 0,
    setGuessCounter: () => { },

    playerGuess: [],
    setPlayerGuess: () => { },

    chooseChar: () => { },
    unChooseChar: () => { },

    shuffledChars: [],
    setShuffledChars: () => { },

    startGame: () => { },
    guess: () => { },
}

export const GameContext = createContext<GameContextType>(initialState);

export function GameContextProvider({ children }: { children: React.ReactNode }) {

    const limit = 15;
    const [gameState, setGameState] = useState<GameStateType>("still");
    const [word, setWord] = useState<string>("sky");
    const [shuffledChars, setShuffledChars] = useState<string[]>([]);
    const [playerGuess, setPlayerGuess] = useState<PlayerGuessType[]>([]);
    const [guessCounter, setGuessCounter] = useState(0);


    function chooseChar(char: string, index: number) {

        if (playerGuess.length === word.length) return;


        setPlayerGuess((prevState) => {

            let possiblePlaces = [...Array(word.length).keys()]; // [0,1,2]

            for (let guessObj of prevState) {
                possiblePlaces = possiblePlaces.filter(place => place !== guessObj.place)

            }

            return [...prevState, { char, index, isCorrect: false, place: possiblePlaces[0] }]
        });
    }


    function unChooseChar(index: number) {
        setPlayerGuess(prevState => prevState.filter(guess => guess.index !== index))
    }

    function startGame() {

        let newWord = "sky"
        setWord(newWord);

        const shuffledChars = shuffle(word, limit);
        setShuffledChars(shuffledChars);

        setPlayerGuess([]);
        setGuessCounter(0)

        setGameState("playing");
    }

    function guess(): void {
        if (playerGuess.length !== word.length) return

        let wordArr = word.split("")


        setPlayerGuess(prevState => prevState.filter(guess => guess.char === wordArr[guess.place]).map(guess => ({ ...guess, isCorrect: guess.char === wordArr[guess.place] })))

        setGuessCounter(prevState => prevState + 1)
    }

    useEffect(() => {

        let correctChars = playerGuess.filter(guess => guess.isCorrect).length;

        if (correctChars === word.length) {
            setGameState("won")
        }

    }, [playerGuess])

    return (
        <GameContext.Provider value={{
            gameState, setGameState,
            word, setWord,
            playerGuess, setPlayerGuess,
            shuffledChars, setShuffledChars,
            chooseChar, unChooseChar, startGame,
            guess,
            guessCounter, setGuessCounter
        }}>
            {children}
        </GameContext.Provider>
    )
} 