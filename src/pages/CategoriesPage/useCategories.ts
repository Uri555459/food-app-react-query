import { useQuery } from '@tanstack/react-query'

import { productApi } from '../../api/product/product.api'

import { ICategory } from '../../types/global.types'

export const useCategories = () => {
	const { data: categories, isLoading } = useQuery<ICategory[]>({
		queryKey: ['categories'],
		queryFn: productApi.getCategories,
	})

	return { categories, isLoading }
}
