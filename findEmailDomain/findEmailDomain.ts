export const findEmailDomain = (address: string): string => {
	const index = address.lastIndexOf('@')
	return address.slice(index + 1, address.length)
}

console.log(findEmailDomain('prettyandsimple@example.com'))
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'))
