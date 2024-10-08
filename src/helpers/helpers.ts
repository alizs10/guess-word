import { TGameHistory } from "../components/game-history/GameHistory";
import { TDifficulty } from "../context/GameContext";

const chars: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

export function shuffle(word: string, limit: number): string[] {

    const shouldBeIncluded = word.split("")
    const randomChars = [];


    for (let i = 0; i < limit - word.length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        randomChars.push(chars[randomIndex]);
    }

    let finalArray = [...shouldBeIncluded, ...randomChars];
    // shuffle finalArray
    for (let i = finalArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [finalArray[i], finalArray[j]] = [finalArray[j], finalArray[i]];
    }
    return finalArray;
}

export const addGameToHistory = (gameData: TGameHistory): TGameHistory[] => {

    const gameHistory: TGameHistory[] = JSON.parse(localStorage.getItem('game-history') || '[]');

    const newGameHistory = [gameData, ...gameHistory];
    localStorage.setItem('game-history', JSON.stringify(newGameHistory));

    return newGameHistory;
}

export const getGameHistory = (sorted = false): TGameHistory[] => {
    const gameHistory: TGameHistory[] = JSON.parse(localStorage.getItem('game-history') || '[]');

    if (sorted) {
        gameHistory.sort((a, b) => b.score - a.score);
    }

    return gameHistory;
}

export const clearGameHistory = (): void => {
    localStorage.removeItem('game-history');
}

export const getGameHistoryLength = (): number => {
    const gameHistory: TGameHistory[] = JSON.parse(localStorage.getItem('game-history') || '[]');
    return gameHistory.length;
}

export const calcScore = (difficulty: TDifficulty, timer: number, guesses: number): number => {
    let score = 0;

    let maxTimeBonus = difficulty === 0 ? 201 : difficulty === 1 ? 401 : 601;
    let maxGuessBonus = difficulty === 0 ? 31 : difficulty === 1 ? 61 : 101;

    let timeBonus = maxTimeBonus - timer < 0 ? 0 : maxTimeBonus - timer; // 10 min
    let guessBonus = maxGuessBonus - guesses < 0 ? 0 : maxGuessBonus - guesses; // 100 guesses
    let difficultyBonus = difficulty === 0 ? 1 : difficulty === 1 ? 2 : 3;

    let totalBonus = timeBonus + guessBonus; // 600 + 100 = 700
    score = difficultyBonus * totalBonus; // 700 * 3 = 2100

    let maxScore = difficultyBonus * (maxTimeBonus + maxGuessBonus); // 3 * (600 + 100) = 2100

    return (score / maxScore) * 10;
}