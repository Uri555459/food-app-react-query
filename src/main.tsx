import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import './i18n.js'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { App } from './App'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { Spinner } from './components'

import 'react-toastify/dist/ReactToastify.css'

import './index.scss'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ErrorBoundary>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Suspense fallback={<Spinner />}>
						<App />
					</Suspense>
					<ToastContainer
						theme='light'
						position='top-right'
						draggable={false}
					/>
				</BrowserRouter>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ErrorBoundary>
	</React.StrictMode>
)
