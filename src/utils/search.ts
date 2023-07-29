import { API_CONSTANTS } from '../constants/api.constants'

import type { ICategory, IProduct } from '../types/global.types'

export const search = async (
	searchQuery = '/categories'
): Promise<ICategory[] | IProduct[]> => {
	const response = await fetch(`${API_CONSTANTS.BASE_URL}${searchQuery}`)
	const data = await response.json()

	return data
}
