import { createContext, useState } from "react";
import { shuffle } from "../helpers/helpers";

type GameStateType = "still" | "playing" | "won" | "lost";

type PlayerGuessType = {
    char: string;
    index: number;
}

type GameContextType = {
    gameState: GameStateType;
    setGameState: (state: GameStateType) => void;

    word: string;
    setWord: (word: string) => void;

    playerGuess: PlayerGuessType[];
    setPlayerGuess: (guess: PlayerGuessType[]) => void;

    chooseChar: (char: string, index: number) => void;

    shuffledChars: string[];
    setShuffledChars: (chars: string[]) => void;

    startGame: () => void;
}

const initialState: GameContextType = {
    gameState: "still",
    setGameState: () => { },

    word: "",
    setWord: () => { },

    playerGuess: [],
    setPlayerGuess: () => { },

    chooseChar: () => { },

    shuffledChars: [],
    setShuffledChars: () => { },

    startGame: () => { },
}

export const GameContext = createContext<GameContextType>(initialState);

export function GameContextProvider({ children }: { children: React.ReactNode }) {

    const limit = 15;
    const [gameState, setGameState] = useState<GameStateType>("still");
    const [word, setWord] = useState<string>("sky");
    const [shuffledChars, setShuffledChars] = useState<string[]>([]);
    const [playerGuess, setPlayerGuess] = useState<PlayerGuessType[]>([]);

    function chooseChar(char: string, index: number) {
        setPlayerGuess(prevState => prevState.length < word.length ? [...prevState, { char, index }] : prevState);
    }

    function startGame() {

        const shuffledChars = shuffle(word, limit);
        setShuffledChars(shuffledChars);

        setGameState("playing");
    }

    return (
        <GameContext.Provider value={{
            gameState, setGameState,
            word, setWord,
            playerGuess, setPlayerGuess,
            shuffledChars, setShuffledChars,
            chooseChar, startGame
        }}>
            {children}
        </GameContext.Provider>
    )
} 