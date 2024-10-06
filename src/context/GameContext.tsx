import { createContext, useEffect, useRef, useState } from "react";
import { shuffle } from "../helpers/helpers";
import { generate } from "random-words";

type GameStateType = "still" | "playing" | "won" | "lost";
export type DifficultyType = 0 | 1 | 2;
export type LimitType = 18 | 24 | 28;


type PlayerGuessType = {
    char: string;
    index: number;
    isCorrect: boolean;
    place: number;
}

type GameContextType = {
    gameState: GameStateType;
    setGameState: (state: GameStateType) => void;

    limit: LimitType;
    setLimit: (limit: LimitType) => void;

    timer: number;
    setTimer: (time: number) => void;

    word: string;
    setWord: (word: string) => void;

    guessCounter: number;
    setGuessCounter: (value: number) => void;

    playerGuess: PlayerGuessType[];
    setPlayerGuess: (guess: PlayerGuessType[]) => void;

    difficulty: DifficultyType;
    setDifficulty: (type: DifficultyType) => void;

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

    limit: 18,
    setLimit: () => { },

    timer: 0,
    setTimer: () => { },

    word: "",
    setWord: () => { },

    guessCounter: 0,
    setGuessCounter: () => { },

    difficulty: 0,
    setDifficulty: () => { },

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

    const [gameState, setGameState] = useState<GameStateType>("still");
    const [limit, setLimit] = useState<LimitType>(18);
    const [word, setWord] = useState<string>("sky");
    const [shuffledChars, setShuffledChars] = useState<string[]>([]);
    const [playerGuess, setPlayerGuess] = useState<PlayerGuessType[]>([]);
    const [difficulty, setDifficulty] = useState<DifficultyType>(0);
    const [guessCounter, setGuessCounter] = useState(0);
    const [timer, setTimer] = useState(0)

    const timerRef = useRef<number | null>(null)

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
        setPlayerGuess(prevState => {

            let isCorrect = prevState.find(guess => guess.index === index)

            if (isCorrect?.isCorrect) {
                return prevState
            }

            return prevState.filter(guess => guess.index !== index)
        })
    }

    function startGame() {

        let wordMinLength = difficulty === 0 ? 4 : difficulty === 1 ? 6 : 8
        let wordMaxLength = difficulty === 0 ? 5 : difficulty === 1 ? 7 : 9

        let newWord = generate({ minLength: wordMinLength, maxLength: wordMaxLength })
        newWord = typeof newWord === 'object' ? newWord[0] : newWord
        setWord(newWord);

        const shuffledChars = shuffle(newWord, limit);
        setShuffledChars(shuffledChars);

        setPlayerGuess([]);
        setGuessCounter(0)
        setTimer(0)

        if (timerRef.current)
            clearInterval(timerRef.current)

        timerRef.current = setInterval(() => {
            setTimer(prevState => prevState + 1)
        }, 1000)

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

            if (timerRef.current)
                clearInterval(timerRef.current)

            setGameState("won")
        }

    }, [playerGuess])


    useEffect(() => {

        if (difficulty === 0) {
            setLimit(18)
        } else if (difficulty === 1) {
            setLimit(24)
        } else if (difficulty === 2) {
            setLimit(28)
        }

    }, [difficulty])

    return (
        <GameContext.Provider value={{
            gameState, setGameState,
            word, setWord,
            playerGuess, setPlayerGuess,
            shuffledChars, setShuffledChars,
            chooseChar, unChooseChar, startGame,
            guess,
            guessCounter, setGuessCounter,
            difficulty, setDifficulty,
            limit, setLimit,
            timer, setTimer
        }}>
            {children}
        </GameContext.Provider>
    )
} 