import { useState, useEffect } from 'react'

export const useDisplayDelay = (delay = 1000, start = true) => {
	const [display, setDisplay] = useState(false)
	useEffect(() => {
		if (start) {
			const timer = setTimeout(() => setDisplay(true), delay)
			return () => clearTimeout(timer)
		}
	}, [delay, start])

	return display
}
