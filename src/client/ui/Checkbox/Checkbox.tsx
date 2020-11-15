import React, { useMemo, FC, InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import { uuid } from 'short-uuid'

import s from './Checkbox.m.scss'

export type CheckboxP = InputHTMLAttributes<HTMLInputElement>

export const Checkbox: FC<CheckboxP> = ({ children, className, ...restProps }) => {
	const id = useMemo(() => uuid(), [])
	return (
		<div className={clsx(s.Checkbox, className)}>
			<input id={id} type="checkbox" {...restProps} />
			<label htmlFor={id}>{children}</label>
		</div>
	)
}
