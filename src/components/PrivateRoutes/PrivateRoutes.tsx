import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes: FC = () => {
	const accessToken = true

	return accessToken ? <Outlet /> : <Navigate to='/' />
}
