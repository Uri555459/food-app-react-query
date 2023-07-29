import { FC, useState } from 'react'

import { Button, Favorites, Typography } from '..'

import { IProduct } from '../../types/global.types'

import styles from './ProductCard.module.scss'

interface Props {
	product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
	const [added, setAdded] = useState(false)

	const formatTitle = product.title.slice(0, 20) + '...'

	const addToBasketHandler = () => {
		setAdded(true)
	}

	return (
		<li className={styles.productCardWrap}>
			<Favorites product={product} />
			<div className={styles.productCard}>
				<div className={styles.productCardImageWrap}>
					<img src={product.imageUrl} alt={product.title} />
				</div>
				<Typography className={styles.title}>{formatTitle}</Typography>
				<Button onClick={addToBasketHandler}>
					{product.added || added ? 'Added' : 'Buy Now'}
				</Button>
			</div>
		</li>
	)
}
