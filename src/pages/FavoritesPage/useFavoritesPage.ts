import { useQuery } from '@tanstack/react-query'
import { userApi } from '../../api/user/user.api'
import { API_CONSTANTS } from '../../constants/api.constants'
import { LOCAL_STORAGE } from '../../constants/localStorage.constants'
import { getLocalStorage } from '../../utils/localStorage'
import { IProduct } from '../../types/global.types'

export const useFavoritesPage = () => {
	const userId = Number(getLocalStorage(LOCAL_STORAGE.USER_ID))

	const getFavoriteProducts = async () => {
		const { favoriteProductIds } = await userApi.getUser(userId)

		if (favoriteProductIds.length === 0) {
			return []
		}
		const favoritesQueryIds = favoriteProductIds.map(
			(item: number) => `id=${item}&`
		)

		const favoritesQueryIdsString = favoritesQueryIds.join('')

		const res = await fetch(
			`${API_CONSTANTS.BASE_URL}/products?${favoritesQueryIdsString}`
		)
		return await res.json()
	}

	const {
		data: favorites,
		isLoading,
		isSuccess,
	} = useQuery<IProduct[]>({
		queryKey: ['favorites'],
		queryFn: getFavoriteProducts,
	})

	return { favorites, isLoading, isSuccess }
}
