import { convertTypeAcquisitionFromJson } from 'typescript'

export const encloseInBrackets = (inputString: string): string => {
	return `(${inputString})`
}

console.log(encloseInBrackets('abacaba'))
