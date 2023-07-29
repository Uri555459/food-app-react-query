import { FC, PropsWithChildren } from 'react'

import styles from './ProductCardList.module.scss'

export const ProductCardList: FC<PropsWithChildren> = ({
	children,
	...props
}) => {
	return (
		<ul className={styles.productCardList} {...props}>
			{children}
		</ul>
	)
}
