import React, { useCallback } from 'react'

export type ShortcutT<E> = {
	key: string
	handler: (e: E) => void
	altKey?: boolean
	ctrlKey?: boolean
}

export const useShortcut = <E extends React.KeyboardEvent>(shortcuts: ShortcutT<E>[], onKeyDown?: (e: E) => void) => {
	const onKeyDownWrap = useCallback(
		(e: E) => {
			onKeyDown && onKeyDown(e)

			const shortcut = shortcuts.find(
				shortcut =>
					shortcut.key === e.key &&
					(shortcut.altKey === undefined || shortcut.altKey === e.altKey) &&
					(shortcut.ctrlKey === undefined || shortcut.ctrlKey === e.ctrlKey),
			)
			shortcut && shortcut.handler(e)
		},
		[shortcuts, onKeyDown],
	)
	return onKeyDownWrap
}
