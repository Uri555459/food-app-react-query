import { FC } from 'react'

import { Button } from '../..'

interface PageErrorProps {
	className?: string
}

export const PageError: FC<PageErrorProps> = () => {
	const reloadPage = () => {
		location.reload()
	}

	return (
		<div>
			<p>Произошла непредвиденная ошибка</p>
			<Button onClick={reloadPage}>Обновить страницу</Button>
		</div>
	)
}
