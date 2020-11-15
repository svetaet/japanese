import React, { useEffect, useMemo, useState } from 'react'

import { data } from 'data'
import { useSearchQuery, useSearchTags } from 'ui/SearchState'
import { useTheme } from 'ui/Theme'
import { Card as CardPreview } from 'ui/Card'

import { CardView } from './CardView'
import { Top } from './Top'
import s from './App.m.scss'

export const App = () => {
	const { theme } = useTheme()

	const [outline, setOutline] = useState(true)
	useEffect(() => {
		if (outline) {
			const handler = () => setOutline(false)
			window.addEventListener('mousedown', handler)
			return () => window.removeEventListener('mousedown', handler)
		} else {
			const handler = (e: KeyboardEvent) => {
				e.key === 'Tab' && setOutline(true)
			}
			window.addEventListener('keydown', handler)
			return () => window.removeEventListener('keydown', handler)
		}
	}, [outline])

	const { query } = useSearchQuery()
	const { searchTags } = useSearchTags()
	const cards = useMemo(() => {
		let cards = data.cards
		if (searchTags.length !== 0) cards = cards.filter(card => card.tags.some(tag => searchTags.includes(tag)))
		if (query.length !== 0) {
			const lowerCaseQuery = query.toLowerCase()
			cards = cards.filter(
				card =>
					card.title.toLowerCase().includes(lowerCaseQuery) ||
					card.text?.toLowerCase().includes(lowerCaseQuery) ||
					card.examples?.some(e => e.jp.includes(lowerCaseQuery)) ||
					card.table?.some(row => row.includes(lowerCaseQuery)) ||
					card.tags.some(tag => tag.includes(lowerCaseQuery)),
			)
		}
		return cards
	}, [query, searchTags])

	const [openedCard, setOpenedCard] = useState<CardT | null>(null)

	return (
		<div className={`${s.App} ${theme} ${outline ? 'outline' : ''}`}>
			<div className={s.Center}>
				<div className={s.Cards}>
					<Top />
					{cards
						.filter(card => card.id !== '')
						.map(card => (
							<CardPreview key={card.id} card={card} setOpenedCard={setOpenedCard} />
						))}
				</div>
			</div>

			<CardView card={openedCard} setOpenedCard={setOpenedCard} />
		</div>
	)
}
