export function checkPalindrome(inputString: string): boolean {
	const lowerCaseString = inputString.toLowerCase()
	const reverseString = lowerCaseString.split('').reverse().join('')

	return lowerCaseString === reverseString
}

console.log(checkPalindrome('aabaa'))
console.log(checkPalindrome('abac'))
console.log(checkPalindrome('a'))
