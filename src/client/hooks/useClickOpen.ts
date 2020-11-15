import { useState } from 'react'

export const useClickOpen = (initOpened = false) => {
	const [opened, setOpened] = useState(initOpened)

	const bind = { onClick: () => setOpened(!opened) }

	return [bind, opened, setOpened] as const
}
