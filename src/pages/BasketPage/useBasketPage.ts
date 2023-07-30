import { useQuery } from '@tanstack/react-query'
import { userApi } from '../../api/user/user.api'
import { API_CONSTANTS } from '../../constants/api.constants'
import { LOCAL_STORAGE } from '../../constants/localStorage.constants'
import { getLocalStorage } from '../../utils/localStorage'
import { IProduct } from '../../types/global.types'

export const useBasketPage = () => {
	const userId = Number(getLocalStorage(LOCAL_STORAGE.USER_ID))

	const getBasketProducts = async () => {
		const { basketProductsIds } = await userApi.getUser(userId)

		if (basketProductsIds.length === 0) {
			return []
		}
		const basketQueryIds = basketProductsIds.map(item => `id=${item.id}&`)

		const basketQueryIdsString = basketQueryIds.join('')

		const res = await fetch(
			`${API_CONSTANTS.BASE_URL}/products?${basketQueryIdsString}`
		)
		return await res.json()
	}

	const {
		data: products,
		isLoading,
		isSuccess,
	} = useQuery<IProduct[]>({
		queryKey: ['basket', '1'],
		queryFn: getBasketProducts,
	})

	return { products, isLoading, isSuccess }
}
