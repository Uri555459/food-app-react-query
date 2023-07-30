import { FC } from 'react'
import { Link } from 'react-router-dom'
import { BsFillBasket3Fill } from 'react-icons/bs'

import styles from './Basket.module.scss'
import { useBasket } from './useBasket'

export const Basket: FC = () => {
	const { user, isSuccess } = useBasket()

	return (
		<Link className={styles.basket} to='/basket'>
			<BsFillBasket3Fill color='#000' size='1.2rem' />
			{isSuccess && user?.basketProductsIds.length !== 0 && (
				<span>{user?.basketProductsIds.length}</span>
			)}
		</Link>
	)
}
