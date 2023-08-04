import { useQuery } from '@tanstack/react-query'
import { productApi } from '../api/product/product.api'

export const useTotalPrice = () => {
	const { data: totalPriceString } = useQuery({
		queryKey: ['basket', '1', '2'],
		queryFn: () => productApi.getTotalPriceProducts(),
	})

	const totalPrice = Number(totalPriceString)

	return { totalPrice }
}
