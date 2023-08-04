import { FC } from 'react'

import {
	BasketItem,
	LayoutDetails,
	Spinner,
	Typography,
} from '../../components'

import { useBasketPage } from './useBasketPage'
import { useTotalPrice } from '../../hooks/useTotalPrice'

import styles from './BasketPage.module.scss'
import { calculatePercentage } from '../../utils/calculatePercentage'

const BasketPage: FC = () => {
	const { products, isLoading, isSuccess } = useBasketPage()
	const { totalPrice } = useTotalPrice()

	if (isLoading) return <Spinner />

	return (
		<div className={styles.basketPage}>
			<LayoutDetails
				title={products?.length ? 'Your Shopping Cart' : 'Shopping Cart Empty'}
			>
				{isSuccess && (
					<>
						<div className={styles.basketPageInner}>
							{isSuccess &&
								products?.map(product => (
									<BasketItem key={product.id} product={product} />
								))}
						</div>
						{Number(totalPrice) > 0 && (
							<div className={styles.basketPageDetails}>
								<div>
									<Typography tag='span' size='md'>
										Purchase Total
									</Typography>
									<Typography tag='span' size='lg'>
										${totalPrice}
									</Typography>
								</div>
								<div>
									<Typography tag='span' size='md'>
										Voucher Code?
									</Typography>
									<input type='text' placeholder='Enter Here' />
								</div>
								<div>
									<Typography tag='span' size='md'>
										Vat 5%
									</Typography>
									<Typography tag='span' size='md'>
										$
										{totalPrice &&
											Math.abs(
												totalPrice - calculatePercentage(totalPrice, 5)
											).toFixed(2)}
									</Typography>
								</div>
								<div>
									<Typography tag='span' size='lg'>
										Sub Total
									</Typography>
									<Typography tag='span' size='lg'>
										${calculatePercentage(Number(totalPrice), 5)}
									</Typography>
								</div>
							</div>
						)}
					</>
				)}
			</LayoutDetails>
		</div>
	)
}

export default BasketPage
