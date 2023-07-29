import { IProduct } from '../types/global.types'

export const getTotalPrice = (state: {
	basket: IProduct[]
	totalPrice: number
}) => {
	const totalPrice = state.basket.reduce(
		(acc, product) => acc + product.price * product.count,
		0
	)

	state.totalPrice = Number(totalPrice.toFixed(2))
}
