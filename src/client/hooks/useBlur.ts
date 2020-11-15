import { useMemo, FocusEvent, KeyboardEvent, useRef, useCallback, useEffect } from 'react'
import { useEvent } from 'hooks'

export type HandleFocusEventT<E> = (e: FocusEvent<E>) => void
export type HandleKeyEventT<E> = (e: KeyboardEvent<E>) => void

export type UseBlurOptionsT<E> = {
	onFocus?: HandleFocusEventT<E>
	preventBlurOnAltTab?: boolean
}
export type UseBlurRT<E> = {
	onFocus: HandleFocusEventT<E>
	onBlur: HandleFocusEventT<E>
}

// This hook helps to fire a callback on a blur event, fired outside of element,
// to which returned onBlur and onFocus event handlers had been attached.

export const useBlur = <E>(onBlur: HandleFocusEventT<E>, options: UseBlurOptionsT<E> = {}): UseBlurRT<E> => {
	const blurTimer = useRef<number | undefined>(undefined)
	// Prevent onBlur firing on component unmount.
	useEffect(() => () => clearTimeout(blurTimer.current), [])
	const resetBlurTimer = useCallback(() => clearTimeout(blurTimer.current), [])

	const bind = useMemo(() => {
		const { onFocus } = options

		return {
			onBlur: (e: FocusEvent<E>) => {
				blurTimer.current = setTimeout(() => onBlur(e))
			},

			onFocus: (e: FocusEvent<E>) => {
				clearTimeout(blurTimer.current)
				onFocus && onFocus(e)
			},
		}
	}, [options, onBlur])

	useEvent({
		eventName: 'blur',
		element: window,
		handler: resetBlurTimer,
		attach: options.preventBlurOnAltTab || false,
	})

	return bind
}
