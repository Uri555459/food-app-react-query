import { ChangeEvent, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { userApi } from '../../api/user/user.api'

import { MESSAGES } from '../../constants/messages.constants'

export const useProfile = () => {
	const [newFullName, setNewFullName] = useState<string>('')
	const [newEmail, setNewEmail] = useState<string>('')
	const [newAddress, setNewAddress] = useState<string>('')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit: SubmitHandler<FieldValues> = async data => {
		if (!newFullName && !newEmail && !newAddress) {
			return toast.error(MESSAGES.profileErrorUpdated)
		}

		userApi.updateUser(1, data)
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

	return { register, handleSubmit, errors, changeHandler, onSubmit }
}
