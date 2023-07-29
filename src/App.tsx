import { Route, Routes } from 'react-router-dom'

import { privateRoutes, publicRoutes } from './routes/routes'

import { LayoutDefault, PrivateRoutes } from './components'

export const App = () => {
	return (
		<div className='wrapper'>
			<LayoutDefault>
				<Routes>
					{publicRoutes.length > 0
						? publicRoutes.map(({ path, element }) => (
								<Route key={path} path={path} element={element} />
						  ))
						: null}
					<Route element={<PrivateRoutes />}>
						{privateRoutes.length > 0
							? privateRoutes.map(({ path, element }) => (
									<Route key={path} path={path} element={element} />
							  ))
							: null}
					</Route>
				</Routes>
			</LayoutDefault>
		</div>
	)
}
