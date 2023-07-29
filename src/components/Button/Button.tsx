import { FC, ReactNode } from 'react'
import cn from 'clsx'

import styles from './Button.module.scss'
import { IClassName } from '../../types/global.types'
import { Link } from 'react-router-dom'

interface Props extends IClassName {
	children: ReactNode
	onClick?: () => void
	backgroundColor?: string
	type?: 'link' | 'button'
	path?: string
	disabled?: boolean
}

export const Button: FC<Props> = ({
	children,
	onClick,
	className,
	type = 'button',
	path = '',
	disabled = false,
	...props
}) => {
	switch (type) {
		case 'link':
			return (
				<Link className={cn(styles.button, className)} to={path}>
					{children}
				</Link>
			)
		default:
			return (
				<button
					className={cn(styles.button, className)}
					onClick={onClick}
					disabled={disabled}
					{...props}
				>
					{children}
				</button>
			)
	}
}
