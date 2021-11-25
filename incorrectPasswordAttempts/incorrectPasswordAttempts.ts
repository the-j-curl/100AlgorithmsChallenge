export const incorrectPasscodeAttempts = (
	passcode: string,
	attempts: string[]
): boolean => {
	let failedAttempts = 0
	for (let i = 0; i < attempts.length; i++) {
		if (attempts[i] !== passcode) {
			failedAttempts++
		}
		if (attempts[i] === passcode && failedAttempts < 10) {
			failedAttempts = 0
		}
	}

	return failedAttempts >= 10
}

console.log(
	incorrectPasscodeAttempts('1111', [
		'1111',
		'4444',
		'9999',
		'3333',
		'8888',
		'2222',
		'7777',
		'0000',
		'6666',
		'7285',
		'5555',
		'1111',
	])
)
console.log(
	incorrectPasscodeAttempts('1111', [
		'1111',
		'4444',
		'9999',
		'0000',
		'5555',
		'1111',
		'8888',
		'2222',
		'1111',
		'0000',
		'6666',
		'7285',
		'5555',
		'1111',
	])
)
