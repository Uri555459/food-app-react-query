import { FC } from 'react'
import { Link } from 'react-router-dom'
import { BsFillBasket3Fill } from 'react-icons/bs'

import styles from './Basket.module.scss'

export const Basket: FC = () => {
	// FIXME: FIXED array products
	const products = []
	return (
		<Link className={styles.basket} to='/basket'>
			<BsFillBasket3Fill color='#000' size='1.2rem' />
			{products.length > 0 && <span>{products.length}</span>}
		</Link>
	)
}
