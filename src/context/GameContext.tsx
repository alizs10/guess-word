import { createContext, useEffect, useRef, useState } from "react";
import { shuffle } from "../helpers/helpers";
import { generate } from "random-words";

type TGameState = "still" | "hold" | "playing" | "won" | "lost";
export type TDifficulty = 0 | 1 | 2;
type TLimit = 18 | 24 | 28;


type TPlayerGuess = {
    char: string;
    index: number;
    isCorrect: boolean;
    place: number;
}

type TGameData = {
    word: string;
    shuffledChars: string[];
    playerGuess: TPlayerGuess[];
    guessCounter: number;
    timer: number;
    difficulty: TDifficulty;
}

type GameContextType = {
    gameState: TGameState;
    setGameState: (state: TGameState) => void;

    limit: TLimit;
    setLimit: (limit: TLimit) => void;

    gameData: TGameData;
    setGameData: (data: TGameData) => void;


    difficulty: TDifficulty;
    setDifficulty: (type: TDifficulty) => void;

    chooseChar: (char: string, index: number) => void;
    unChooseChar: (index: number) => void;

    restartConfirmVis: boolean;
    setRestartConfirmVis: (mode: boolean) => void;

    backConfirmVis: boolean;
    setBackConfirmVis: (mode: boolean) => void;

    startGame: () => void;
    guess: () => void;
    confirmRestart: () => void;
    confirmBack: () => void;
    holdGame: () => void;
    continueGame: () => void;
}

const initialState: GameContextType = {
    gameState: "still",
    setGameState: () => { },

    limit: 18,
    setLimit: () => { },

    gameData: {
        word: "",
        shuffledChars: [],
        playerGuess: [],
        guessCounter: 0,
        timer: 0,
        difficulty: 0,
    },
    setGameData: () => { },

    difficulty: 0,
    setDifficulty: () => { },

    chooseChar: () => { },
    unChooseChar: () => { },

    restartConfirmVis: false,
    setRestartConfirmVis: () => { },

    backConfirmVis: false,
    setBackConfirmVis: () => { },

    startGame: () => { },
    guess: () => { },
    confirmRestart: () => { },
    confirmBack: () => { },
    holdGame: () => { },
    continueGame: () => { },

}

export const GameContext = createContext<GameContextType>(initialState);

export function GameContextProvider({ children }: { children: React.ReactNode }) {

    const [gameState, setGameState] = useState<TGameState>("still");
    const [limit, setLimit] = useState<TLimit>(18);
    const [difficulty, setDifficulty] = useState<TDifficulty>(0);

    const [gameData, setGameData] = useState<TGameData>({
        word: "",
        shuffledChars: [],
        playerGuess: [],
        guessCounter: 0,
        timer: 0,
        difficulty: 0,
    })

    // const [word, setWord] = useState<string>("sky");
    // const [shuffledChars, setShuffledChars] = useState<string[]>([]);
    // const [playerGuess, setPlayerGuess] = useState<TPlayerGuess[]>([]);
    // const [guessCounter, setGuessCounter] = useState(0);
    // const [timer, setTimer] = useState(0)



    const [restartConfirmVis, setRestartConfirmVis] = useState(false)
    const [backConfirmVis, setBackConfirmVis] = useState(false)

    const timerRef = useRef<number | null>(null)

    function chooseChar(char: string, index: number) {

        if (gameData.playerGuess.length === gameData.word.length) return;


        setGameData((prevState) => {
            let playerGuess = prevState.playerGuess
            let possiblePlaces = [...Array(prevState.word.length).keys()]; // [0,1,2]

            for (let guessObj of playerGuess) {
                possiblePlaces = possiblePlaces.filter(place => place !== guessObj.place)
            }

            return { ...prevState, playerGuess: [...playerGuess, { char, index, isCorrect: false, place: possiblePlaces[0] }] }
        });
    }


    function unChooseChar(index: number) {
        setGameData(prevState => {
            let playerGuess = prevState.playerGuess

            let isCorrect = playerGuess.find(guess => guess.index === index)

            if (isCorrect?.isCorrect) {
                return prevState
            }

            return { ...prevState, playerGuess: playerGuess.filter(guess => guess.index !== index) }
        })
    }

    function startGame() {

        let wordMinLength = difficulty === 0 ? 4 : difficulty === 1 ? 6 : 8
        let wordMaxLength = difficulty === 0 ? 5 : difficulty === 1 ? 7 : 9

        let newWord = generate({ minLength: wordMinLength, maxLength: wordMaxLength })
        newWord = typeof newWord === 'object' ? newWord[0] : newWord
        const shuffledChars = shuffle(newWord, limit);
        // setGameData(prevState => ({...prevState, word: newWord}));

        setGameData(prevState => ({ ...prevState, shuffledChars, word: newWord, playerGuess: [], guessCounter: 0, timer: 0, difficulty }));

        if (timerRef.current)
            clearInterval(timerRef.current)

        timerRef.current = setInterval(() => {
            setGameData(prevState => ({ ...prevState, timer: prevState.timer + 1 }))
        }, 1000)

        setGameState("playing");
    }

    function guess(): void {
        if (gameData.playerGuess.length !== gameData.word.length) return

        let wordArr = gameData.word.split("")

        setGameData(prevState => ({ ...prevState, playerGuess: prevState.playerGuess.filter(guess => guess.char === wordArr[guess.place]).map(guess => ({ ...guess, isCorrect: guess.char === wordArr[guess.place] })), guessCounter: prevState.guessCounter + 1 }))

    }

    function holdGame() {
        if (timerRef.current)
            clearInterval(timerRef.current)

        setGameState("hold")
    }

    function continueGame() {
        timerRef.current = setInterval(() => {
            setGameData(prevState => ({ ...prevState, timer: prevState.timer + 1 }))
        }, 1000)

        setGameState("playing")
    }

    function confirmRestart() {
        setRestartConfirmVis(true)
    }

    function confirmBack() {
        setBackConfirmVis(true)
    }

    useEffect(() => {

        let correctChars = gameData.playerGuess.filter(guess => guess.isCorrect).length;

        if (correctChars === gameData.word.length) {

            if (timerRef.current)
                clearInterval(timerRef.current)

            setGameState("won")
        }

    }, [gameData.playerGuess])


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
            gameData, setGameData,
            chooseChar, unChooseChar, startGame,
            guess,
            difficulty, setDifficulty,
            limit, setLimit,
            restartConfirmVis, setRestartConfirmVis,
            confirmRestart,
            backConfirmVis, setBackConfirmVis,
            confirmBack,
            holdGame, continueGame
        }}>
            {children}
        </GameContext.Provider>
    )
} 