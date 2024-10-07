import { TGameHistory } from "../components/game-history/GameHistory";

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

export const getGameHistory = (): TGameHistory[] => {
    const gameHistory: TGameHistory[] = JSON.parse(localStorage.getItem('game-history') || '[]');
    return gameHistory;
}

export const clearGameHistory = (): void => {
    localStorage.removeItem('game-history');
}

export const getGameHistoryLength = (): number => {
    const gameHistory: TGameHistory[] = JSON.parse(localStorage.getItem('game-history') || '[]');
    return gameHistory.length;
}