import { FC, MouseEventHandler, useEffect, useRef } from 'react'

import styles from '../Select.module.scss'

export type Option = {
	label: string
	value: string
}
interface OptionProps {
	option: Option
	onClick: (value: Option['value']) => void
}
export const SelectItem: FC<OptionProps> = props => {
	const {
		option: { value, label },
		onClick,
	} = props
	const optionRef = useRef<HTMLLIElement>(null)

	const handleClick =
		(clickedValue: Option['value']): MouseEventHandler<HTMLLIElement> =>
		() => {
			onClick(clickedValue)
		}

	useEffect(() => {
		const option = optionRef.current
		if (!option) return
		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (document.activeElement === option && event.key === 'Enter') {
				onClick(value)
			}
		}

		option.addEventListener('keydown', handleEnterKeyDown)
		return () => {
			option.removeEventListener('keydown', handleEnterKeyDown)
		}
	}, [value, onClick])

	return (
		<li
			className={styles.option}
			value={value}
			onClick={handleClick(value)}
			tabIndex={0}
			data-testid={`select-option-${value}`}
			ref={optionRef}
		>
			{label}
		</li>
	)
}
