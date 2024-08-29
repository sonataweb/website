export function match(param: string) {
	return /\d{17,19}/.test(param);
}
