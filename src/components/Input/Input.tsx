import { ChangeEvent, FC, useState } from 'react'
import cn from 'clsx'
import {
	FieldError,
	FieldErrorsImpl,
	FieldValues,
	Merge,
	UseFormRegister,
} from 'react-hook-form'

import { IClassName } from '../../types/global.types'

import { Typography } from '..'

import styles from './Input.module.scss'

interface Props extends IClassName {
	type: string
	name: string
	placeholder: string
	register: UseFormRegister<FieldValues>
	message?: string
	error?: string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined
}

export const Input: FC<Props> = ({
	type,
	name,
	placeholder,
	className,
	register,
	message,
	error,
	...props
}) => {
	return (
		<div className={styles.inputWrap}>
			<input
				className={cn(styles.input, className)}
				type={type}
				placeholder={placeholder}
				autoComplete='off'
				{...register(name, { required: message })}
				{...props}
			/>
			{error ? (
				<Typography tag='span' size='xs' className={styles.error}>
					<>{error}</>
				</Typography>
			) : null}
		</div>
	)
}
