export function differentSymbolsNaive(s: string): number {
	const uniqueChars: string[] = [...new Set(s)]
	return uniqueChars.length
}

console.log(differentSymbolsNaive('cabca'))
