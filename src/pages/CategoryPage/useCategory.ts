import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { productApi } from '../../api/product/product.api'

export const useCategory = () => {
	const categoryId = useParams().id

	const getCategory = () => {
		if (categoryId) {
			return productApi.getProductsByCategoryId(categoryId)
		}
	}

	const { data: products, isLoading } = useQuery({
		queryKey: ['category'],
		queryFn: getCategory,
	})

	return { products, isLoading }
}
