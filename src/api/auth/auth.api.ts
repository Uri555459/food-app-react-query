import { FieldValues } from 'react-hook-form'
import { API_CONSTANTS } from '../../constants/api.constants'

export const authApi = {
	async register(data: FieldValues) {
		const res = await fetch(`${API_CONSTANTS.BASE_URL}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...data,
				address: '',
				basketProductsIds: [],
				favoriteProductIds: [],
			}),
		})

		return await res.json()
	},

	async login(data: FieldValues) {
		const res = await fetch(`${API_CONSTANTS.BASE_URL}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		return await res.json()
	},
}
