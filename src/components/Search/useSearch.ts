import { ChangeEvent, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useSearch = () => {
	const [value, setValue] = useState('')
	const location = useLocation()

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setValue(value)
	}

	return { value, setValue, handleSearch, location }
}
