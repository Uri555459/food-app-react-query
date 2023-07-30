import { FC, useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { IProduct } from '../../types/global.types'

import { userApi } from '../../api/user/user.api'
import { productApi } from '../../api/product/product.api'
import { getLocalStorage } from '../../utils/localStorage'
import { LOCAL_STORAGE } from '../../constants/localStorage.constants'

import styles from './Favorites.module.scss'

interface Props {
	product: IProduct
}

export const Favorites: FC<Props> = ({ product }) => {
	const [isFavorites, setFavorites] = useState(false)
	const userId = Number(getLocalStorage(LOCAL_STORAGE.USER_ID))
	const client = useQueryClient()

	const { data } = useQuery({
		queryKey: ['favorites', '1'],
		queryFn: () => userApi.getUser(userId),
	})

	useEffect(() => {
		data?.favoriteProductIds.forEach(item => {
			if (item === product.id) {
				setFavorites(true)
			} else {
				setFavorites(false)
			}
		})
	}, [data?.favoriteProductIds, product.id])

	const handleClick = async () => {
		data?.favoriteProductIds.forEach(item => {
			if (item === product.id) {
				setFavorites(true)
			} else {
				setFavorites(false)
			}
		})
		mutate()
	}

	const { mutate } = useMutation({
		mutationFn: () => productApi.toggleToFavorites(userId, product.id),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['favorites'] })
		},
	})

	return (
		<button className={styles.favorites} onClick={handleClick}>
			{data?.favoriteProductIds.find(id => id === product.id) ? (
				<AiFillHeart color='#ff785b' />
			) : (
				<AiOutlineHeart />
			)}
		</button>
	)
}
