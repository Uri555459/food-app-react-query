import { FC, PropsWithChildren } from 'react'

import styles from './LayoutDefault.module.scss'

export const LayoutDefault: FC<PropsWithChildren> = ({
	children,
	...props
}) => {
	return (
		<main className={styles.layoutDefault} {...props}>
			{children}
		</main>
	)
}
