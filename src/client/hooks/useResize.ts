import { useEffect } from 'react'

export const useResize = (handler: (e: UIEvent) => void, attach = true) => {
	useEffect(() => {
		if (attach) {
			window.addEventListener('resize', handler)
			return () => window.removeEventListener('resize', handler)
		}
	}, [attach, handler])
}
