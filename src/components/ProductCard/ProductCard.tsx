import { FC, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { Button, Favorites, Typography } from '..'

import { IProduct } from '../../types/global.types'

import { getLocalStorage } from '../../utils/localStorage'
import { LOCAL_STORAGE } from '../../constants/localStorage.constants'

import styles from './ProductCard.module.scss'
import { productApi } from '../../api/product/product.api'

interface Props {
	product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
	const [added, setAdded] = useState(false)

	const formatTitle = product.title.slice(0, 20) + '...'

	const userId = Number(getLocalStorage(LOCAL_STORAGE.USER_ID))

	const client = useQueryClient()

	const handleClick = () => {
		setAdded(true)
		mutate()
	}

	const { mutate } = useMutation({
		mutationFn: () => productApi.toggleToBasket(userId, product.id),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['favorites'] })
		},
	})

	return (
		<li className={styles.productCardWrap}>
			<Favorites product={product} />
			<div className={styles.productCard}>
				<div className={styles.productCardImageWrap}>
					<img src={product.imageUrl} alt={product.title} />
				</div>
				<Typography className={styles.title}>{formatTitle}</Typography>
				<Button onClick={handleClick}>
					{product.added || added ? 'Added' : 'Buy Now'}
				</Button>
			</div>
		</li>
	)
}
