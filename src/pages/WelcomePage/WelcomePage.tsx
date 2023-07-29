import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowRight } from 'react-icons/fa'

import { Button, Header, Logo } from '../../components'
import { Typography } from '../../components'

import styles from './WelcomePage.module.scss'

const WelcomePage: FC = () => {
	const { t } = useTranslation('welcome')

	return (
		<div className={styles.welcomePage}>
			<Header className='headerTransparent' />
			<Logo />
			<div className={styles.welcomePageInner}>
				<Typography className={styles.welcomePageTitle} tag='h1' size='lg'>
					{t('title')}
				</Typography>
				<Typography tag='p' size='sm'>
					{t('description')}
				</Typography>

				<Button path='/login' className={styles.link} type='link'>
					<FaArrowRight color='#6A6A6A' size='1.2rem' />
				</Button>
			</div>
		</div>
	)
}

export default WelcomePage
