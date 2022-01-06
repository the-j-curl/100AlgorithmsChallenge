export const firstNotRepeatingCharacter = (s: string): string => {
	const inputArray: string[] = s.split('')
	const inputObj = {}
	let answer = '_'
	inputArray.forEach(item => {
		if (!inputObj.hasOwnProperty(item)) {
			inputObj[item] = 1
		} else {
			inputObj[item]++
		}
	})
	console.log(inputObj)
	// for (const key in inputObj) {
	//   if (inputObj[key] === '1') {
	//     return key
	//   } else return "_"
	// }
	return answer
}

console.log(firstNotRepeatingCharacter('abacabad'))
console.log(firstNotRepeatingCharacter('abacabaabacaba'))
