import { useEffect } from 'react'

export const useOnFullscreenChange = (handler: (e: Event) => void, attach = true) => {
	useEffect(() => {
		if (attach) {
			document.addEventListener('fullscreenchange', handler)
			return () => document.removeEventListener('fullscreenchange', handler)
		}
	}, [attach, handler])
}
