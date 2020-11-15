import React, { useCallback, useMemo, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

import { useSearchQuery, useSearchTags } from 'ui/SearchState'
import { Button } from 'ui/Button/Button'
import { useShortcut, useInputDebounce, useEvent } from 'hooks'

import s from './Search.m.scss'

export const Search = () => {
	const { query, setQuery } = useSearchQuery()
	const { searchTags, removeSearchTag } = useSearchTags()

	const inputRef = useRef<HTMLInputElement>(null)
	const focusInput = useCallback((e?: React.MouseEvent<Element>) => {
		if (e && e.target === e.currentTarget) e.preventDefault()
		inputRef.current?.focus()
	}, [])

	const onWindowKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.ctrlKey && e.key === 'f') {
				e.preventDefault()
				focusInput()
			}
		},
		[focusInput],
	)
	useEvent({ element: window, eventName: 'keydown', handler: onWindowKeyDown })

	const shortcuts = useMemo(() => [{ key: 'Escape', handler: () => setQuery('') }], [setQuery])
	const onKeyDown = useShortcut(shortcuts)

	const bindChange = useInputDebounce({ value: query, setValue: setQuery })

	return (
		<div className={s.Search} onMouseDown={focusInput}>
			<FontAwesomeIcon className={s.SearchIcon} icon={faSearch} onMouseDown={focusInput} />
			<div className={s.InputWrap}>
				{searchTags.map(tag => (
					<Button
						key={tag}
						className={s.Tag}
						iconClassName={s.TagIcon}
						text={tag}
						onClick={() => removeSearchTag(tag)}
					/>
				))}
				<input
					ref={inputRef}
					className={s.Input}
					type="search"
					autoComplete="off"
					onKeyDown={onKeyDown}
					{...bindChange}
				/>
			</div>
			{query !== '' && (
				<FontAwesomeIcon
					className={s.CloseIcon}
					icon={faTimes}
					onClick={() => {
						setQuery('')
						focusInput()
					}}
				/>
			)}
		</div>
	)
}
