import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { productApi } from '../../api/product/product.api'
import { userApi } from '../../api/user/user.api'
import { getLocalStorage } from '../../utils/localStorage'
import { LOCAL_STORAGE } from '../../constants/localStorage.constants'

import { IProduct } from '../../types/global.types'

export const useBasketItem = (product: IProduct) => {
	const userId = Number(getLocalStorage(LOCAL_STORAGE.USER_ID))

	const client = useQueryClient()

	const { data: user, isSuccess } = useQuery({
		queryKey: ['basket'],
		queryFn: () => userApi.getUser(userId),
	})

	const productCount = user?.basketProductsIds?.find(
		item => product.id === item.id
	)?.count

	const handlePlus = () => {
		plusMutate()
	}

	const { mutate: plusMutate } = useMutation({
		mutationFn: () => productApi.handlePlus(userId, product.id),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['basket'] })
		},
	})

	const handleMinus = () => {
		minusMutate()
	}

	const { mutate: minusMutate } = useMutation({
		mutationFn: () => productApi.handleMinus(userId, product.id),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['basket'] })
		},
	})

	const handleClick = () => {
		handleClickMutate()
	}

	const { mutate: handleClickMutate } = useMutation({
		mutationFn: () =>
			productApi.toggleToBasket(userId, product.id, product.price),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['basket', '1'] })
		},
	})

	return { isSuccess, handleClick, handlePlus, handleMinus, productCount }
}
