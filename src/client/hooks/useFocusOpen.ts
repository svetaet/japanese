import { useState, useMemo } from 'react'

import { useBlur } from './useBlur'

export const useFocusOpen = (initOpened = false) => {
	const [opened, setOpened] = useState(initOpened)
	const [open, close] = useMemo(() => [() => setOpened(true), () => setOpened(false)], [])
	const bind = useBlur(close, { onFocus: open })

	return [bind, opened, setOpened] as const
}
