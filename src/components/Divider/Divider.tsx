import { FC } from 'react'
import cn from 'clsx'

import { IClassName } from '../../types/global.types'

import styles from './Divider.module.scss'

type Props = IClassName

export const Divider: FC<Props> = ({ className }) => {
	return <div className={cn(styles.divider, className)} />
}
