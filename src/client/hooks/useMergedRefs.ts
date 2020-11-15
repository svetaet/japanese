import { useCallback, Ref, MutableRefObject } from 'react'

export const useMergedRefs = <T>(...refs: (Ref<T> | undefined)[]) =>
	useCallback(
		(instance: T) =>
			refs.forEach(ref => {
				if (ref) typeof ref === 'function' ? ref(instance) : ((ref as MutableRefObject<T>).current = instance)
			}),
		[refs],
	)
