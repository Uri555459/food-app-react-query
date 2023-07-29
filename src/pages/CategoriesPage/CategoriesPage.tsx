import { FC } from 'react'
import cn from 'clsx'

import { BackToTop, CategoryCard, PageInfo, Spinner } from '../../components'

import { useCategories } from './useCategories'

import styles from './CategoriesPage.module.scss'

const CategoriesPage: FC = () => {
	const { categories, isLoading } = useCategories()

	if (isLoading) return <Spinner />

	return (
		<div className={cn(styles.categoriesPage, 'flexCol')}>
			<PageInfo
				title='Welcome'
				description='Homemade meals prepared with love. Richest ingredients. '
			/>
			<div className={'inner'}>
				{categories?.map(category => (
					<CategoryCard key={category.title} category={category} />
				))}
			</div>
			<BackToTop />
		</div>
	)
}

export default CategoriesPage
