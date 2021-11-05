export function confirmEnding(str: string, target: string) {
	const startPoint = str.length - target.length
	return target === str.substr(startPoint)
}

console.log(confirmEnding('Abstraction', 'action'))
console.log(confirmEnding('Open sesame', 'pen'))
