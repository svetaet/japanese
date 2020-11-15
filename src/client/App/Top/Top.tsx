import React from 'react'

import { Search } from './Search'
import s from './Top.m.scss'

export const Top = () => {
	return (
		<div className={s.Top}>
			<Search />
		</div>
	)
}
