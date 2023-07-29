import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getLocalStorage } from '../../utils/localStorage'
import { LOCAL_STORAGE } from '../../constants/localStorage.constants'

export const PrivateRoutes: FC = () => {
	const accessToken = getLocalStorage(LOCAL_STORAGE.TOKEN_KEY)

	return accessToken ? <Outlet /> : <Navigate to='/' />
}
