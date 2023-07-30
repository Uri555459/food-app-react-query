import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { LOCAL_STORAGE } from '../../constants/localStorage.constants'
import { getLocalStorage } from '../../utils/localStorage'
import { userApi } from '../../api/user/user.api'
import { productApi } from '../../api/product/product.api'

export const useFavorites = (productId: number) => {
	const userId = Number(getLocalStorage(LOCAL_STORAGE.USER_ID))
	const client = useQueryClient()

	const { data: user } = useQuery({
		queryKey: ['favorites', '1'],
		queryFn: () => userApi.getUser(userId),
	})

	const { mutate: toggleFavorites } = useMutation({
		mutationFn: () => productApi.toggleToFavorites(userId, productId),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['favorites'] })
		},
	})

	return { user, toggleFavorites }
}
