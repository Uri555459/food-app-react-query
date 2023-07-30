import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

import {
	Button,
	Header,
	Input,
	Logo,
	Social,
	Typography,
} from '../../components'

import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'
import { authApi } from '../../api/auth/auth.api'
import { MESSAGES } from '../../constants/messages.constants'
import { LOCAL_STORAGE } from '../../constants/localStorage.constants'

import styles from './LoginPage.module.scss'

const LoginPage: FC = () => {
	const { t } = useTranslation('auth')
	const navigate = useNavigate()

	const accessToken = getLocalStorage(LOCAL_STORAGE.TOKEN_KEY)

	useEffect(() => {
		if (accessToken) return navigate('/categories')
	}, [accessToken, navigate])

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit: SubmitHandler<FieldValues> = async data => {
		const res = await authApi.login(data)
		if (typeof res === 'string') return toast.error(res)
		toast.success(`User: ${res.user.fullName}, you have successfully logged on`)

		setLocalStorage(LOCAL_STORAGE.TOKEN_KEY, JSON.stringify(res.accessToken))
		setLocalStorage(LOCAL_STORAGE.USER_ID, JSON.stringify(res.user.id))

		navigate('/categories')
	}

	return (
		<div className={styles.loginPage}>
			<Header />
			<Logo className={styles.loginPageLogo} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type='text'
					name='email'
					placeholder='Email'
					register={register}
					message={MESSAGES.emailIsRequired}
					error={errors.email?.message}
				/>
				<Input
					type='password'
					name='password'
					placeholder='Password'
					register={register}
					message={MESSAGES.passwordIsRequired}
					error={errors.password?.message}
				/>

				<Link to='#'>
					<Typography tag='span' size='xs'>
						{t('forgotPassword')}
					</Typography>
				</Link>
				<Button type='button' className={styles.loginPageButton}>
					{t('eatAway')}
				</Button>
				<Typography tag='span' size='xs'>
					{t('signInWith')}
				</Typography>
				<Social />
			</form>
			<Button
				className={styles.loginPageSignUpButton}
				type='link'
				path='/register'
			>
				<MdOutlineKeyboardArrowUp size='2rem' />
				{t('signUp')}
			</Button>
		</div>
	)
}

export default LoginPage
