export function confirmEnding(str: string, target: string) {
	const startPoint = str.length - target.length
	const stringEnd = str.substr(startPoint)
	return stringEnd === target
}

console.log(confirmEnding('Abstraction', 'action'))
console.log(confirmEnding('Open sesame', 'pen'))
