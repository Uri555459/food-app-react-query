import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Typography } from '..'

import backToTopImage from '../../assets/images/back-to-top.svg'

import styles from './BackToTop.module.scss'

export const BackToTop: FC = () => {
	const { t } = useTranslation()

	const scrollToTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div className={styles.backToTopWrap}>
			<button className={styles.backToTop} onClick={scrollToTopHandler}>
				<img src={backToTopImage} alt='Back To Top' />
				<Typography tag='span' size='xs'>
					{t('backToTop')}
				</Typography>
			</button>
		</div>
	)
}
