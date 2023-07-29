import { FC } from 'react'
import { Link } from 'react-router-dom'
import { RiStarSFill } from 'react-icons/ri'

import { Typography } from '..'

import styles from './CategoryCard.module.scss'
import { ICategory } from '../../types/global.types'

interface Props {
	category: ICategory
}

export const CategoryCard: FC<Props> = ({ category }) => {
	return (
		<Link
			className={styles.categoryCard}
			to={`/categories/${category.category}`}
		>
			<div className={styles.categoryCardImageWrap}>
				<img src={category.imageUrl} alt={category.title} />
			</div>
			<Typography tag='h3' size='lg' className={styles.categoryCardTitle}>
				{category.title}
			</Typography>
			<div className={styles.categoryRating}>
				<RiStarSFill color='#EF5B5B' size='' />
				<span>{category.rating}</span>
				<span>({category.peoples} ratings)</span>
			</div>
		</Link>
	)
}
