import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import styles from './Social.module.scss'

export const Social: FC = () => {
	return (
		<div className={styles.social}>
			<Link to='#'>
				<FaFacebook color='#0F71A8' size='2rem' />
			</Link>
			<Link to='#'>
				<FcGoogle size='2rem' />
			</Link>
		</div>
	)
}
