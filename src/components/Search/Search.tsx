import { FC, useEffect } from 'react'

import { useSearch } from './useSearch'

import styles from './Search.module.scss'

export const Search: FC = () => {
	const { value, setValue, handleSearch, location } = useSearch()

	useEffect(() => {}, [setValue, location.pathname])

	return (
		<div className={styles.search}>
			<input
				type='text'
				placeholder='Search Menu'
				value={value}
				onChange={handleSearch}
			/>
		</div>
	)
}
