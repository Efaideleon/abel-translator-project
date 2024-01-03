const useGetWordsAndBreaklines = (inputText: string): {
    english: string[]
    spanish: string[]
    phonetic: string[]
    breaklines: boolean[]
} => {
    if (inputText === undefined) {
        throw new Error("inputText is undefined")
    }

    const spanishAndEnglishWordPairs: string[] = inputText.split('\n')
    const englishWords: string[] = []
    const spanishWords: string[] = []
    const phoneticWords: string[] = []
    const breaklines: boolean[] = []

    spanishAndEnglishWordPairs.forEach(wordPair => {
        const [englishWord = '', spanishWord = ''] = wordPair.split("|")
        englishWords.push(englishWord || '')
        spanishWords.push(spanishWord || '')
        breaklines.push(false)
    })

    return ({ english: englishWords, spanish: spanishWords, phonetic: phoneticWords, breaklines: breaklines })
}

export default useGetWordsAndBreaklines