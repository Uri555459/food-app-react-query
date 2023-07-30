import { FieldValues } from 'react-hook-form'
import { API_CONSTANTS } from '../../constants/api.constants'
import { IUser } from '../../types/global.types'

export const userApi = {
	async updateUser(id: number, data: FieldValues) {
		await fetch(`${API_CONSTANTS.BASE_URL}/users/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
	},

	async getUser(id: number): Promise<IUser> {
		const res = await fetch(`${API_CONSTANTS.BASE_URL}/users/${id}`)
		return await res.json()
	},
}
