import React, { FC, useMemo, useState } from 'react'
import { a, useTransition, UseTransitionProps } from '@react-spring/web'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'ui/Button'
import { useSearchTags } from 'ui/SearchState'
import { IconButton } from 'ui/IconButton'
import { useShortcut } from 'hooks'

import s from './CardView.m.scss'

const springConfig: UseTransitionProps = {
	from: { opacity: 0, scale: 0.8 },
	enter: { opacity: 1, scale: 1 },
	leave: { opacity: 0, scale: 0.9 },
	config: { clamp: true, tension: 300, friction: 15 },
}

export type CardViewP = { card: CardT | null; showTranslation?: boolean; setOpenedCard: (c: CardT | null) => void }

export const CardView: FC<CardViewP> = ({ card, showTranslation: propsShowTranslation, setOpenedCard }) => {
	const [showTranslation, setShowTranslations] = useState(propsShowTranslation)
	const { searchTags, addSearchTag } = useSearchTags()

	const shortcuts = useMemo(() => [{ key: 'Esc', handler: () => setOpenedCard(null) }], [setOpenedCard])
	const bindShortcut = useShortcut(shortcuts)

	const transition = useTransition(card, springConfig)

	return transition(
		({ opacity, scale }, card: CardT | null) =>
			card && (
				<a.div
					className={s.CardViewBack}
					style={{ opacity }}
					onClick={e => e.target === e.currentTarget && setOpenedCard(null)}
					onKeyDown={bindShortcut}
				>
					<a.div className={s.CardView} style={{ scale }}>
						<div className={s.Top}>
							<p className={s.Title}>{card.title}</p>
							<IconButton
								className={s.TranslationButton + (showTranslation ? ' ' + s.TranslationButtonActive : '')}
								icon={faLanguage}
								onClick={() => setShowTranslations(!showTranslation)}
							/>
						</div>

						<div className={s.Tags}>
							{card.tags.map(tag => (
								<Button
									key={tag}
									className={s.Tag}
									text={tag}
									onClick={() => addSearchTag(tag)}
									disabled={searchTags.includes(tag)}
								/>
							))}
						</div>

						{card.table && (
							<div className={s.Table}>
								{card.table[0].map((columnName, n) => (
									<div key={columnName} className={s.TableColumn}>
										{card.table.map((row, m) => (
											<p key={m}>{row[n] || '　'}</p>
										))}
									</div>
								))}
							</div>
						)}

						{card.text && <p className={s.Text}>{card.text}</p>}

						{card.examples && (
							<div className={s.Examples}>
								{card.examples.map((ex, i) => (
									<div className={s.Example} key={i}>
										<p>{ex.jp}</p>
										{showTranslation && <p>{ex.en}</p>}
									</div>
								))}
							</div>
						)}
					</a.div>
				</a.div>
			),
	)
}
