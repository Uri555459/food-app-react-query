import { FC, ReactNode } from 'react'
import cn from 'clsx'

import { IClassName } from '../../types/global.types'

import styles from './Typography.module.scss'

interface Props extends IClassName {
	children: ReactNode
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
	size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
}

export const Typography: FC<Props> = ({
	children,
	tag = 'p',
	size = 'xl',
	className,
	...props
}) => {
	switch (tag) {
		case 'h1':
			return (
				<h1
					className={cn(styles.typography, className, {
						[styles.xs]: size === 'xs',
						[styles.sm]: size === 'sm',
						[styles.md]: size === 'md',
						[styles.lg]: size === 'lg',
						[styles.xl]: size === 'xl',
					})}
					{...props}
				>
					{children}
				</h1>
			)
		case 'h2':
			return (
				<h2
					className={cn(styles.typography, className, {
						[styles.sm]: size === 'sm',
						[styles.md]: size === 'md',
						[styles.lg]: size === 'lg',
					})}
					{...props}
				>
					{children}
				</h2>
			)
		case 'h3':
			return (
				<h3
					className={cn(styles.typography, className, {
						[styles.sm]: size === 'sm',
						[styles.md]: size === 'md',
						[styles.lg]: size === 'lg',
					})}
					{...props}
				>
					{children}
				</h3>
			)
		case 'h4':
			return (
				<h4
					className={cn(styles.typography, className, {
						[styles.sm]: size === 'sm',
						[styles.md]: size === 'md',
						[styles.lg]: size === 'lg',
					})}
					{...props}
				>
					{children}
				</h4>
			)
		case 'p':
			return (
				<p
					className={cn(styles.typography, className, {
						[styles.sm]: size === 'sm',
						[styles.md]: size === 'md',
						[styles.lg]: size === 'lg',
					})}
					{...props}
				>
					{children}
				</p>
			)
		case 'span':
			return (
				<span
					className={cn(styles.typography, className, {
						[styles.sm]: size === 'sm',
						[styles.md]: size === 'md',
						[styles.lg]: size === 'lg',
					})}
					{...props}
				>
					{children}
				</span>
			)
		default:
			return <></>
	}
}
