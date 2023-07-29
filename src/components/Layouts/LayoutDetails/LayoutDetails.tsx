import { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'

import { BottomNav, Divider, Typography } from '../..'

import styles from './LayoutDetails.module.scss'

interface Props {
	children: ReactNode
	title: string
}

export const LayoutDetails: FC<Props> = ({ children, title = '' }) => {
	const navigate = useNavigate()

	const backHandler = () => {
		navigate(-1)
	}

	return (
		<div className={styles.layoutDetails}>
			<button className={styles.close} onClick={backHandler}>
				<AiFillCloseCircle size='1.5rem' />
			</button>
			<Typography tag='h1' size='xl' className={styles.title}>
				{title}
			</Typography>
			<Divider />
			{children}
			<div className={styles.bottomNavWrapper}>
				<Divider className={styles.bottomNavDivider} />
				<BottomNav />
			</div>
		</div>
	)
}
