import React, { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

import s from './IconButton.m.scss'

export type IconButtonP = Pick<FontAwesomeIconProps, 'icon'> & HTMLAttributes<HTMLButtonElement>

export const IconButton: FC<IconButtonP> = ({ icon, className, ...restProps }) => {
	return (
		<button className={clsx(s.IconButton, className)} {...restProps}>
			<FontAwesomeIcon icon={icon} />
		</button>
	)
}
