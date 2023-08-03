import { API_CONSTANTS } from '../../constants/api.constants'
import { LOCAL_STORAGE } from '../../constants/localStorage.constants'
import { IBasketItem, ICategory, IProduct } from '../../types/global.types'
import { getLocalStorage } from '../../utils/localStorage'
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

	async toggleToBasket(userId: number, productId: number, price: number) {
		const user = await userApi.getUser(userId)

		if (!user) {
			console.log('User not found')
		}

		const candidate = user.basketProductsIds.find(item => item.id === productId)

		let newBasketProductsIds: IBasketItem[] = []

		if (candidate) {
			newBasketProductsIds = user.basketProductsIds.filter(
				item => item !== candidate
			)
		} else {
			newBasketProductsIds = [
				...user.basketProductsIds,
				{ id: productId, count: 1, price },
			]
		}

		await fetch(`${API_CONSTANTS.BASE_URL}/users/${userId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
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
				favoriteProductIds: newFavoriteProductIds,
			}),
		})
	},

	async handlePlus(userId: number, productId: number) {
		const user = await userApi.getUser(userId)

		if (!user) {
			console.log('User not found')
		}

		const candidate = user.basketProductsIds.find(item => item.id === productId)

		let newBasketProductsIds: IBasketItem[] = []

		if (candidate) {
			newBasketProductsIds = user.basketProductsIds.map(item => {
				if (item.id === productId) {
					item.count += 1
				}
				return item
			})
		}

		await fetch(`${API_CONSTANTS.BASE_URL}/users/${userId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				basketProductsIds: newBasketProductsIds,
			}),
		})
	},

	async handleMinus(userId: number, productId: number) {
		const user = await userApi.getUser(userId)

		if (!user) {
			console.log('User not found')
		}

		const candidate = user.basketProductsIds.find(item => item.id === productId)

		let newBasketProductsIds: IBasketItem[] = []

		if (candidate) {
			newBasketProductsIds = user.basketProductsIds.map(item => {
				if (item.id === productId) {
					if (item.count === 1) return item
					item.count -= 1
				}
				return item
			})
		}

		await fetch(`${API_CONSTANTS.BASE_URL}/users/${userId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				basketProductsIds: newBasketProductsIds,
			}),
		})
	},

	async getTotalPriceProducts() {
		const userId = Number(getLocalStorage(LOCAL_STORAGE.USER_ID))
		const user = await userApi.getUser(userId)

		const price = user.basketProductsIds
			.reduce((acc, item) => acc + item.count * item.price, 0)
			.toFixed(2)

		return price
	},
}
