export function addTwoDigits(number: any): number {
	const numberArray = number.toString().split('');
	return +numberArray[0] + +numberArray[1];
}

console.log(addTwoDigits(29));

// ALTERNATIVE SOLUTION

// export function addTwoDigits(number: any): number {
//   return number
//     .toString()
//     .split('')
//     .reduce((totalValue: string, currentValue: string) => {
//       return +totalValue + +currentValue;
//     });
// };
// console.log(addTwoDigits(29));
