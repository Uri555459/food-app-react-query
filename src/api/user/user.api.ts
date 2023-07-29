import { FieldValues } from 'react-hook-form'
import { API_CONSTANTS } from '../../constants/api.constants'

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
}
