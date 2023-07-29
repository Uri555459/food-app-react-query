import { FC } from 'react'
import cn from 'clsx'

import { IClassName } from '../../types/global.types'

import styles from './Logo.module.scss'

type Props = IClassName

export const Logo: FC<Props> = ({ className }) => {
	return (
		<div className={cn(styles.logo, className)}>
			<img className={styles.logoImage} src='/images/logo.png' alt='Logo' />
		</div>
	)
}
