import { FC } from 'react'
import { IoClose } from 'react-icons/io5'

import { Typography } from '..'

import { IProduct } from '../../types/global.types'

import { useBasketItem } from './useBasketItem'
import { totalPriceProduct } from '../../utils/totalPriceProduct'

import styles from './BasketItem.module.scss'

interface Props {
	product: IProduct
}

export const BasketItem: FC<Props> = ({ product }) => {
	const { isSuccess, handleClick, handlePlus, handleMinus, productCount } =
		useBasketItem(product)

	return (
		<div className={styles.basketItem}>
			<Typography tag='h4' size='sm' className={styles.basketItemTitle}>
				{product.title}
			</Typography>
			<div className={styles.basketItemInner}>
				<div className={styles.basketItemImageWrap}>
					<img src={product.imageUrl} alt={product.title} />
				</div>
				<div className={styles.basketItemControls}>
					<button onClick={handleMinus}>-</button>
					<Typography tag='span' size='xs'>
						{isSuccess && productCount}
					</Typography>
					<button onClick={handlePlus}>+</button>
				</div>
				<div className={styles.basketItemPrice}>
					<Typography tag='span' size='lg'>
						${isSuccess && totalPriceProduct(productCount || 1, product.price)}
					</Typography>
					<button onClick={handleClick}>
						<IoClose size='1.5rem' color='#EF0B0B' />
					</button>
				</div>
			</div>
		</div>
	)
}
