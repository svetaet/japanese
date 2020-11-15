import React, { FC } from 'react'

import { Button } from 'ui/Button'
import { useSearchTags } from 'ui/SearchState'

import s from './Card.m.scss'

export type CardP = { card: CardT; setOpenedCard: (c: CardT) => void }

export const Card: FC<CardP> = ({ card, setOpenedCard }) => {
	const { searchTags, addSearchTag, removeSearchTag } = useSearchTags()

	return (
		<div className={s.Card}>
			<button className={s.CardTitle} onClick={() => setOpenedCard(card)}>
				{card.title}
			</button>
			<div>
				{card.tags.map(tag => {
					const isActive = searchTags.includes(tag)
					return (
						<Button
							key={tag}
							className={s.Tag}
							iconClassName={isActive ? ' ' + s.ActiveTagIcon : ''}
							text={tag}
							onClick={() => (isActive ? removeSearchTag : addSearchTag)(tag)}
						/>
					)
				})}
			</div>
		</div>
	)
}
