import { FC } from 'react'

import { Header, Search, Typography } from '..'

import styles from './PageInfo.module.scss'

interface Props {
	title: string
	description: string
}

export const PageInfo: FC<Props> = ({ title, description }) => {
	return (
		<div className={styles.pageInfo}>
			<Header />
			<Typography tag='h1' size='xl' className={styles.title}>
				{title}
			</Typography>
			<Typography tag='p' size='md' className={styles.description}>
				{description}
			</Typography>
			<Search />
		</div>
	)
}
