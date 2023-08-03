import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'

import {
	BasketItem,
	LayoutDetails,
	Spinner,
	Typography,
} from '../../components'

import { productApi } from '../../api/product/product.api'
import { useBasketPage } from './useBasketPage'

import styles from './BasketPage.module.scss'

const BasketPage: FC = () => {
	const { products, isLoading, isSuccess } = useBasketPage()

	const { data: totalPrice } = useQuery({
		queryKey: ['basket', '1', '2'],
		queryFn: () => productApi.getTotalPriceProducts(),
	})

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
