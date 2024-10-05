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
