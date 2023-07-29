import { FC } from 'react'

import { BasketItem, LayoutDetails, Typography } from '../../components'

import styles from './BasketPage.module.scss'
import { IProduct } from '../../types/global.types'

const BasketPage: FC = () => {
	// FIXME: Fixed array products and total price
	const products = [] as IProduct[]
	const totalPrice = 0

	return (
		<div className={styles.basketPage}>
			<LayoutDetails
				title={
					products.length > 0 ? 'Your Shopping Cart' : 'Shopping Cart Empty'
				}
			>
				{products.length > 0 && (
					<>
						<div className={styles.basketPageInner}>
							{products.length > 0 &&
								products.map(product => (
									<BasketItem key={product.id} product={product} />
								))}
						</div>
						{totalPrice > 0 && (
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
										354
									</Typography>
								</div>
								<div>
									<Typography tag='span' size='lg'>
										Sub Total
									</Typography>
									<Typography tag='span' size='lg'>
										$354
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
