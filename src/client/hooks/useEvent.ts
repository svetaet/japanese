import { useEffect, RefObject } from 'react'

export type UseEventOptionsT<E, EN extends string, H = (e: E) => void> = {
	eventName: EN
	handler: H
	element?: {
		addEventListener: (eventName: EN, handler: H) => void
		removeEventListener: (eventName: EN, handler: H) => void
	}
	ref?: RefObject<{
		addEventListener: (eventName: EN, handler: H) => void
		removeEventListener: (eventName: EN, handler: H) => void
	}>
	attach?: boolean
}

export const useEvent = <E, EN extends string>({
	eventName,
	handler,
	element,
	ref,
	attach = true,
}: UseEventOptionsT<E, EN>) => {
	useEffect(() => {
		const el = (ref && ref.current) || element
		if (attach && el) {
			el.addEventListener(eventName, handler)
			return () => el.removeEventListener(eventName, handler)
		}
	}, [element, ref, eventName, handler, attach])
}
