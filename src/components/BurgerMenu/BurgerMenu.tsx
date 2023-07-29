import { FC } from 'react'
import cn from 'clsx'

import styles from './BurgerMenu.module.scss'

interface Props {
	active: boolean
	setActive: () => void
}

export const BurgerMenu: FC<Props> = ({ active, setActive }) => {
	return (
		<div className={styles.menuIconWrapper} onClick={setActive}>
			<div
				className={cn(styles.menuIcon, {
					[styles.menuIconActive]: active,
				})}
			></div>
		</div>
	)
}
