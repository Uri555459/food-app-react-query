import { ReactNode } from 'react'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { LiaMedalSolid } from 'react-icons/lia'
import { MdOutlinePayment } from 'react-icons/md'

import {
	BasketPageAsync,
	CategoriesPageAsync,
	CategoryPageAsync,
	FavoritesPageAsync,
	LoginPageAsync,
	ProfilePageAsync,
	RegisterPageAsync,
	WelcomePageAsync,
} from '../pages'

type Routes = {
	path: string
	element: ReactNode
}

export const publicRoutes: Routes[] = [
	{
		path: '/',
		element: <WelcomePageAsync />,
	},
	{
		path: '/login',
		element: <LoginPageAsync />,
	},
	{
		path: '/register',
		element: <RegisterPageAsync />,
	},
]

export const privateRoutes: Routes[] = [
	{
		path: '/categories',
		element: <CategoriesPageAsync />,
	},
	{
		path: '/categories/:id',
		element: <CategoryPageAsync />,
	},
	{
		path: '/basket',
		element: <BasketPageAsync />,
	},
	{
		path: '/profile',
		element: <ProfilePageAsync />,
	},

	{
		path: '/favorites',
		element: <FavoritesPageAsync />,
	},

	{
		path: '*',
		element: <WelcomePageAsync />,
	},
]

type MenuRoute = {
	label: string
} & Routes

export const menuRoutes: MenuRoute[] = [
	{
		path: '/profile',
		element: <AiOutlineUser color='#fff' size='1.8rem' />,
		label: 'Profile',
	},
	{
		path: '/favorites',
		element: <AiOutlineHeart color='#fff' size='1.8rem' />,
		label: 'Wishlist',
	},
	{
		path: '/loyalty-points',
		element: <LiaMedalSolid color='#fff' size='1.8rem' />,
		label: 'Loyalty Points',
	},
	{
		path: '/payment-methods',
		element: <MdOutlinePayment color='#fff' size='1.8rem' />,
		label: 'Payment Methods',
	},
]
