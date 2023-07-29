import { FC } from 'react'
import cn from 'clsx'

import {
	BottomNav,
	PageInfo,
	ProductCard,
	ProductCardList,
	Spinner,
} from '../../components'

import styles from './CategoryPage.module.scss'
import { useCategory } from './useCategory'

const CategoryPage: FC = () => {
	const { products, isLoading } = useCategory()

	if (isLoading) return <Spinner />

	return (
		<div className={styles.categoryPage}>
			<PageInfo
				title='Main Dishes'
				description='Find the best selling dishes. All meals are prepared fresh.'
			/>
			<div className={cn(styles.categoryPageWrap, 'flexCol')}>
				<div className='inner'>
					<ProductCardList>
						{products?.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
					</ProductCardList>
				</div>
				<BottomNav />
			</div>
		</div>
	)
}

export default CategoryPage
