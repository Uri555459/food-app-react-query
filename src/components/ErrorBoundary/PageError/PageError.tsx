import { FC } from 'react'

import { Button, Typography } from '../..'

import styles from './PageError.module.scss'

interface PageErrorProps {
	className?: string
}

export const PageError: FC<PageErrorProps> = () => {
	const reloadPage = () => {
		location.reload()
	}

	return (
		<div className={styles.pageError}>
			<Typography tag='h1' size='lg'>
				Произошла непредвиденная ошибка
			</Typography>
			<Button onClick={reloadPage}>Обновить страницу</Button>
		</div>
	)
}
