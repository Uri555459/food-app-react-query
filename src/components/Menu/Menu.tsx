import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'clsx'
import { changeLanguage } from 'i18next'
import { SlLogout } from 'react-icons/sl'

import { Typography } from '..'
import { Select } from '..'

import { menuRoutes } from '../../routes/routes'

import { Option } from '../Select/SelectItem/SelectItem'

import styles from './Menu.module.scss'

interface Props {
	isShow: boolean
}

export const Menu: FC<Props> = ({ isShow }) => {
	// FIXME: FIXED access token
	const accessToken = true

	const [month, setMonthValue] = useState('')
	const handleMonthSelect = (value: string) => {
		setMonthValue(value)
		changeLanguage(value)
	}

	const options: Option[] = [
		{ value: 'en', label: 'En' },
		{ value: 'ru', label: 'Ru' },
	]

	const selected = options.find(item => item.value === month)

	const lng = (localStorage.getItem('i18nextLng') || 'en').toUpperCase()

	const logoutHandler = () => {}

	return (
		<div
			className={cn(styles.menuInner, {
				[styles.menuInnerActive]: isShow,
			})}
		>
			{accessToken && (
				<>
					<div className={styles.avatar}>
						<img src='/images/avatar.png' alt='Avatar' />
					</div>
					<Typography className={styles.menuUserName} size='sm'>
						Full Name
					</Typography>
				</>
			)}
			<nav className={styles.menu}>
				{accessToken &&
					menuRoutes.length > 0 &&
					menuRoutes.map(item => (
						<Link key={item.label} className={styles.menuItem} to={item.path}>
							{item.element}
							<span className={styles.menuItemLabel}>{item.label}</span>
						</Link>
					))}

				{accessToken && (
					<button className={styles.menuItem} onClick={logoutHandler}>
						<SlLogout color='#fff' size='1.8rem' />
						<span className={styles.menuItemLabel}>Logout</span>
					</button>
				)}

				<Select
					mode='cells'
					options={options}
					selected={selected || null}
					onChange={handleMonthSelect}
					placeholder={lng}
				/>
			</nav>
		</div>
	)
}
