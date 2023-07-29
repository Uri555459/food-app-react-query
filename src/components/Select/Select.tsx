import { useState, useEffect, useRef } from 'react'
import type { FC, MouseEventHandler } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import styles from './Select.module.scss'
import { Option, SelectItem } from './SelectItem/SelectItem'

interface SelectProps {
	selected: Option | null
	options: Option[]
	placeholder?: string
	mode?: 'rows' | 'cells'
	status?: 'default' | 'invalid'
	onChange?: (selected: Option['value']) => void
	onClose?: () => void
}

export const Select: FC<SelectProps> = props => {
	const {
		mode = 'rows',
		options,
		placeholder,
		status = 'default',
		selected,
		onChange,
		onClose,
	} = props
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const rootRef = useRef<HTMLDivElement>(null)
	const placeholderRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				isOpen && onClose?.()
				setIsOpen(false)
			}
		}

		window.addEventListener('click', handleClick)

		return () => {
			window.removeEventListener('click', handleClick)
		}
	}, [isOpen, onClose])

	useEffect(() => {
		const placeholderEl = placeholderRef.current
		if (!placeholderEl) return

		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Enter') {
				setIsOpen(prev => !prev)
			}
		}
		placeholderEl.addEventListener('keydown', handleEnterKeyDown)

		return () => {
			placeholderEl.removeEventListener('keydown', handleEnterKeyDown)
		}
	}, [])

	const handleOptionClick = (value: Option['value']) => {
		setIsOpen(false)
		onChange?.(value)
	}
	const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<div
			className={styles.selectWrapper}
			ref={rootRef}
			data-is-active={isOpen}
			data-mode={mode}
			data-testid='selectWrapper'
		>
			<div className={styles.arrow}>
				<MdOutlineKeyboardArrowDown size={25} />
			</div>
			<div
				className={styles.placeholder}
				data-status={status}
				data-selected={!!selected?.value}
				onClick={handlePlaceHolderClick}
				role='button'
				tabIndex={0}
				ref={placeholderRef}
			>
				{selected?.label || placeholder}
			</div>
			{isOpen && (
				<ul className={styles.select} data-testid='selectDropdown'>
					{options.map(option => (
						<SelectItem
							key={option.value}
							option={option}
							onClick={handleOptionClick}
						/>
					))}
				</ul>
			)}
		</div>
	)
}
