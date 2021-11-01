export function isCaseInsensitivePalindrome(inputString: string): boolean {
	const lowerCaseInput = inputString.toLowerCase()
	const reversedInput = lowerCaseInput.split('').reverse().join('')
	return lowerCaseInput === reversedInput
}

console.log(isCaseInsensitivePalindrome('AaBaa'))
console.log(isCaseInsensitivePalindrome('abac'))
