import { ChangeEvent, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { userApi } from '../../api/user/user.api'
import { MESSAGES } from '../../constants/messages.constants'
import { getLocalStorage } from '../../utils/localStorage'

export const useProfile = () => {
	const [newFullName, setNewFullName] = useState<string>('')
	const [newEmail, setNewEmail] = useState<string>('')
	const [newAddress, setNewAddress] = useState<string>('')
	const userId = Number(getLocalStorage('userId'))

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit: SubmitHandler<FieldValues> = async data => {
		if (!newFullName && !newEmail && !newAddress) {
			return toast.error(MESSAGES.profileErrorUpdated)
		}

		await userApi.updateUser(userId, data)
		toast.success(MESSAGES.profileSuccessUpdated)
		setNewFullName('')
		setNewEmail('')
		setNewAddress('')
	}

	const changeHandler = (event: ChangeEvent) => {
		const target = event.target as HTMLFormElement
		const value = target.value
		const name = target.name

		switch (name) {
			case 'fullName':
				return setNewFullName(value)

			case 'email':
				return setNewEmail(value)

			case 'address':
				return setNewAddress(value)

			default:
				return ''
		}
	}

	const { data: user } = useQuery({
		queryKey: ['user'],
		queryFn: () => userApi.getUser(userId),
	})

	return { register, handleSubmit, errors, changeHandler, onSubmit, user }
}
