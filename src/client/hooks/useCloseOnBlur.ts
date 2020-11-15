import { useCallback } from 'react'

import { useBlur, HandleFocusEventT, UseBlurOptionsT, UseBlurRT } from './useBlur'

export type UseCloseOnBlurOptionsT<E> = UseBlurOptionsT<E> & {
	onBlur?: HandleFocusEventT<E>
}

export const useCloseOnBlur = <E>(
	setOpened: (opened: boolean) => void,
	options?: UseCloseOnBlurOptionsT<E>,
): UseBlurRT<E> => {
	const propsOnBlur = options && options.onBlur
	const onBlur = useCallback<HandleFocusEventT<E>>(
		e => {
			setOpened(false)
			propsOnBlur && propsOnBlur(e)
		},
		[setOpened, propsOnBlur],
	)
	return useBlur(onBlur, options)
}
