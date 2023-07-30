import { FC } from 'react'

import { Button, Favorites, Typography } from '..'

import { IProduct } from '../../types/global.types'

import styles from './ProductCard.module.scss'
import { useProductCard } from './useProductCard'

interface Props {
	product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
	const { user, formatTitle, handleClick } = useProductCard(product)

	return (
		<li className={styles.productCardWrap}>
			<Favorites product={product} />
			<div className={styles.productCard}>
				<div className={styles.productCardImageWrap}>
					<img src={product.imageUrl} alt={product.title} />
				</div>
				<Typography className={styles.title}>{formatTitle}</Typography>
				<Button onClick={handleClick}>
					{user?.basketProductsIds.find(item => item.id === product.id)
						? 'Added'
						: 'Buy Now'}
				</Button>
			</div>
		</li>
	)
}
