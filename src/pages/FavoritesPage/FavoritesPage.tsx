import { FC } from 'react'
import cn from 'clsx'

import {
	BottomNav,
	PageInfo,
	ProductCard,
	ProductCardList,
} from '../../components'

import styles from './FavoritesPage.module.scss'
import { IProduct } from '../../types/global.types'

const FavoritesPage: FC = () => {
	// FIXME: Fixed favorites array
	const favorites = [] as IProduct[]

	return (
		<div className={styles.favoritesPage}>
			<PageInfo
				title='Main Dishes'
				description='Find the best selling dishes. All meals are prepared fresh.'
			/>
			<div className={cn(styles.favoritesPageWrap, 'flexCol')}>
				<div className='inner'>
					<ProductCardList>
						{favorites.length > 0 &&
							favorites.map(product => (
								<ProductCard key={product.id} product={product} />
							))}
					</ProductCardList>
				</div>
				<BottomNav />
			</div>
		</div>
	)
}

export default FavoritesPage
