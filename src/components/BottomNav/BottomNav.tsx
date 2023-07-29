import { FC } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { VscHome } from 'react-icons/vsc'
import { BsFillBasket3Fill } from 'react-icons/bs'

import styles from './BottomNav.module.scss'

export const BottomNav: FC = () => {
	return (
		<nav className={styles.bottomNav}>
			<Link className={styles.bottomNavItem} to='/profile'>
				<AiOutlineUser color='#C4C4C4' size='1.2rem' />
			</Link>
			<Link className={styles.bottomNavItem} to='/categories'>
				<VscHome color='#C4C4C4' size='1.2rem' />
			</Link>
			<Link className={styles.bottomNavItem} to='/basket'>
				<BsFillBasket3Fill color='#C4C4C4' size='1.2rem' />
			</Link>
		</nav>
	)
}
