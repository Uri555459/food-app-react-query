import { FC } from 'react'

import { Button, LayoutDetails, Typography } from '../../components'

import styles from './ProfilePage.module.scss'
import { MESSAGES } from '../../constants/messages.constants'
import { useProfile } from './useProfile'

const ProfilePage: FC = () => {
	const { register, handleSubmit, errors, changeHandler, onSubmit, user } =
		useProfile()

	return (
		<div className={styles.profilePage}>
			<LayoutDetails title='Profile'>
				<div className={styles.profilePageImageWrap}>
					<img src='/images/avatar.png' alt='' />
				</div>
				<Typography tag='h1' size='xl' className={styles.title}>
					{user?.fullName}
				</Typography>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.inputWrap}>
						<input
							className={styles.input}
							{...register('fullName', {
								required: MESSAGES.fullNameIsRequired,
							})}
							name='fullName'
							placeholder='Full Name'
							type='text'
							defaultValue={user?.fullName}
							onChange={changeHandler}
						/>
						{errors.fullName ? (
							<Typography tag='span' size='xs' className={styles.error}>
								<>{errors.fullName.message}</>
							</Typography>
						) : null}
					</div>
					<div className={styles.inputWrap}>
						<input
							className={styles.input}
							{...register('email', { required: MESSAGES.emailIsRequired })}
							name='email'
							placeholder='Email'
							type='email'
							defaultValue={user?.email}
							onChange={changeHandler}
						/>
						{errors.email ? (
							<Typography tag='span' size='xs' className={styles.error}>
								<>{errors.email.message}</>
							</Typography>
						) : null}
					</div>
					<div className={styles.inputWrap}>
						<textarea
							className={styles.input}
							{...register('address', { required: MESSAGES.addressIsRequired })}
							name='address'
							placeholder='Delivery address'
							onChange={changeHandler}
							rows={5}
							defaultValue={user?.address}
						></textarea>
						{errors.address ? (
							<Typography tag='span' size='xs' className={styles.error}>
								<>{errors.address.message}</>
							</Typography>
						) : null}
					</div>
					<Button>Save</Button>
				</form>
			</LayoutDetails>
		</div>
	)
}

export default ProfilePage
