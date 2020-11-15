import React, { FC, InputHTMLAttributes, useState, useCallback, useLayoutEffect, useMemo } from 'react'
import clsx from 'clsx'

import { debounce } from 'utils/debounce'

import s from './NumberInput.m.scss'

const isValidNumber = (value: string) => {
	return /^-{0,1}\d+$/.test(value)
}

export type NumberInputP = { value: number; setValue: (value: number) => void } & InputHTMLAttributes<HTMLInputElement>

export const NumberInput: FC<NumberInputP> = ({ className, value, setValue, ...restProps }) => {
	const debouncedSetValue = useMemo(() => debounce(setValue), [setValue])
	const [localValue, setLocalValue] = useState(value)
	useLayoutEffect(() => {
		setLocalValue(value)
	}, [value])

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const rawValue = e.target.value
			if (rawValue === '' || isValidNumber(rawValue)) {
				const newValue = Number(rawValue)
				setLocalValue(newValue)
				debouncedSetValue(newValue)
			}
		},
		[debouncedSetValue],
	)

	const onKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'ArrowUp') setValue(value + 1)
		else if (e.key === 'ArrowDown') setValue(value - 1)
	}

	return (
		<input
			className={clsx(s.NumberInput, className)}
			type="text"
			onChange={onChange}
			onKeyDown={onKeyDown}
			value={localValue}
			{...restProps}
		/>
	)
}
