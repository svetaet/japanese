import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'

import { Square } from 'ui/icons/Square'

import s from './Button.m.scss'

const TopBorderStyle = s.ButtonBorder + ' ' + s.ButtonBorderTop
const BottomBorderStyle = s.ButtonBorder + ' ' + s.ButtonBorderBottom

type NativeButtonP = HTMLAttributes<HTMLButtonElement>

export type ButtonP = Omit<NativeButtonP, 'onClick'> & {
	text: string
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	disabled?: boolean
	iconClassName?: string
}
export const Button = ({ text, onClick, disabled, className, iconClassName, ...props }: ButtonP) => {
	return (
		<button
			className={clsx(className, s.Button, { [s.disabled]: disabled })}
			onClick={disabled ? undefined : onClick}
			tabIndex={disabled ? -1 : undefined}
			{...props}
		>
			<div className={TopBorderStyle} />
			<div className={BottomBorderStyle} />
			<div className={s.ButtonFill} />
			<div className={s.ButtonContent}>
				<Square className={s.ButtonIcon + (iconClassName ? ' ' + iconClassName : '')} />
				<p className={s.ButtonText}>{text}</p>
			</div>
		</button>
	)
}
