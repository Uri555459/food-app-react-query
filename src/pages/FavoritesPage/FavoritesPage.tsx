import { FC } from 'react'
import cn from 'clsx'

import {
	BottomNav,
	PageInfo,
	ProductCard,
	ProductCardList,
	Spinner,
	Typography,
} from '../../components'

import { useFavoritesPage } from './useFavoritesPage'

import styles from './FavoritesPage.module.scss'

const FavoritesPage: FC = () => {
	const { favorites, isLoading } = useFavoritesPage()

	if (isLoading) return <Spinner />

	return (
		<div className={styles.favoritesPage}>
			<PageInfo
				title='Main Dishes'
				description='Find the best selling dishes. All meals are prepared fresh.'
			/>
			<div className={cn(styles.favoritesPageWrap, 'flexCol')}>
				<div className='inner'>
					{favorites?.length === 0 && (
						<Typography
							tag='h3'
							size='lg'
							className={styles.favoritesPageEmpty}
						>
							Wishlist is empty
						</Typography>
					)}
					<ProductCardList>
						{favorites?.map(product => (
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
