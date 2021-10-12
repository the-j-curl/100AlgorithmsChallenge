export function addTwoDigits(n: any): number {
return n.toString().split('').reduce((totalValue: string, currentValue: string) => {
  return +totalValue + +currentValue;
});
};

console.log(addTwoDigits(29));

// alternative solution
// export function addTwoDigits(n: any): number {
//   const numberArray = n.toString().split('');
//   return +numberArray[0] + +numberArray[1];
//   };
  
//   console.log(addTwoDigits(29));