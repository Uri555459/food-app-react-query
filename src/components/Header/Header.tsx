import { FC } from 'react'
import cn from 'clsx'

import { Basket, BurgerMenu, Menu } from '..'

import { useToggle } from '../../hooks/useToggle'
import { IClassName } from '../../types/global.types'

import styles from './Header.module.scss'

type Props = IClassName

export const Header: FC<Props> = ({ className }) => {
	// FIXME: Fixed access token
	const accessToken = true

	const [active, setActive] = useToggle(false)

	return (
		<header className={cn(styles.header, className)}>
			<BurgerMenu active={active} setActive={setActive} />
			{accessToken && <Basket />}

			<Menu isShow={active} />
		</header>
	)
}
