export const calculatePercentage = (sum: number, percent: number): number => {
	return Number((sum * (1 + percent / 100)).toFixed(2))
}
