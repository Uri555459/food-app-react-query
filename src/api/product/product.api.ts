import { API_CONSTANTS } from '../../constants/api.constants'
import { ICategory, IProduct } from '../../types/global.types'

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

	async addedFlagToBasket(id: number) {
		const res = await fetch(`${API_CONSTANTS.BASE_URL}/products/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ added: true }),
		})
		return await res.json()
	},

	async removeFlagToBasket(id: number) {
		const res = await fetch(`${API_CONSTANTS.BASE_URL}/products/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ added: false }),
		})
		return await res.json()
	},

	async addedToFavorites(id: number) {
		const res = await fetch(`${API_CONSTANTS.BASE_URL}/products/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ isFavorites: true }),
		})
		return await res.json()
	},

	async removeToFavorites(id: number) {
		const res = await fetch(`${API_CONSTANTS.BASE_URL}/products/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ isFavorites: false }),
		})
		return await res.json()
	},
}
