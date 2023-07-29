import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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

import { addUser, selectUser } from '../../redux/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks'

import { authApi } from '../../api/auth/auth.api'
import { MESSAGES } from '../../constants/messages.constants'

import styles from './RegisterPage.module.scss'

const RegisterPage: FC = () => {
	const { t } = useTranslation('auth')
	const dispatch = useAppDispatch()
	const { accessToken } = useAppSelector(selectUser)
	const navigate = useNavigate()

	useEffect(() => {
		if (accessToken) return navigate('/categories')
	}, [accessToken, navigate])

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit: SubmitHandler<FieldValues> = async data => {
		const res = await authApi.register(data)
		if (typeof res === 'string') return toast.error(res)
		toast.success(
			`User: ${res.user.fullName}, has been successfully established`
		)
		const { user, accessToken } = res
		dispatch(addUser({ ...user, accessToken }))
	}

	return (
		<div className={styles.registerPage}>
			<Header />
			<Logo className={styles.registerPageLogo} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type='text'
					name='fullName'
					placeholder='Full Name'
					register={register}
					message={MESSAGES.fullNameIsRequired}
					error={errors.fullName?.message}
				/>
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
				{/* <Input
					type='password'
					name='confirmPassword'
					placeholder='Confirm Password'
					register={register}
					message='Confirm password is required'
					error={errors.confirmPassword?.message}
				/> */}
				<Button className={styles.registerPageButton}>
					{t('neverHungryAgain')}
				</Button>
				<Typography tag='span' size='xs'>
					{t('orSignUpWith')}
				</Typography>
				<Social />
			</form>
			<Button
				className={styles.registerPageSignInButton}
				type='link'
				path='/login'
			>
				<MdOutlineKeyboardArrowUp size='2rem' />
				{t('signIn')}
			</Button>
		</div>
	)
}

export default RegisterPage
