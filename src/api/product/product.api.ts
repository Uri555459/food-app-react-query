import { API_CONSTANTS } from '../../constants/api.constants'
import { ICategory, IProduct } from '../../types/global.types'
import { userApi } from '../user/user.api'

export const productApi = {
	async getCategories(): Promise<ICategory[]> {
		const res = await fetch(`${API_CONSTANTS.BASE_URL}/categories`)
		return await res.json()
	},

	async getProductsByCategoryId(id: string): Promise<IProduct[]> {
		const res = await fetch(
			`${API_CONSTANTS.BASE_URL}/products?categoryId=${id}`
		)
		return await res.json()
	},

	async toggleToBasket(userId: number, productId: number) {
		const user = await userApi.getUser(userId)

		if (!user) {
			console.log('User not found')
		}

		const candidate = user.basketProductsIds.find(
			(id: number) => id === productId
		)

		let newBasketProductsIds: number[] = []

		if (candidate) {
			newBasketProductsIds = user.basketProductsIds.filter(
				(id: number) => id !== candidate
			)
		} else {
			newBasketProductsIds = [...user.basketProductsIds, productId]
		}

		await fetch(`${API_CONSTANTS.BASE_URL}/users/${userId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...user,
				basketProductsIds: newBasketProductsIds,
			}),
		})
	},

	async toggleToFavorites(userId: number, productId: number) {
		const user = await userApi.getUser(userId)

		if (!user) {
			console.log('User not found')
		}

		const candidate = user.favoriteProductIds.find(
			(id: number) => id === productId
		)

		let newFavoriteProductIds: number[] = []

		if (candidate) {
			newFavoriteProductIds = user.favoriteProductIds.filter(
				(id: number) => id !== candidate
			)
		} else {
			newFavoriteProductIds = [...user.favoriteProductIds, productId]
		}

		await fetch(`${API_CONSTANTS.BASE_URL}/users/${userId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...user,
				favoriteProductIds: newFavoriteProductIds,
			}),
		})
	},
}
