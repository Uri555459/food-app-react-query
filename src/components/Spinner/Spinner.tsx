import { FC } from 'react'

import styles from './Spinner.module.scss'

export const Spinner: FC = () => {
	return (
		<div className={styles.spinnerOverlay}>
			<div className={styles.spinner}>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}