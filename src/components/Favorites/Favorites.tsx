import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { IProduct } from '../../types/global.types'

import styles from './Favorites.module.scss'
import { useFavorites } from './useFavorites'

interface Props {
	product: IProduct
}

export const Favorites: FC<Props> = ({ product }) => {
	const { user, toggleFavorites } = useFavorites(product.id)

	return (
		<button className={styles.favorites} onClick={() => toggleFavorites()}>
			{user?.favoriteProductIds.find(id => id === product.id) ? (
				<AiFillHeart color='#ff785b' />
			) : (
				<AiOutlineHeart />
			)}
		</button>
	)
}
