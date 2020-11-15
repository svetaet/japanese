import { useState, useCallback } from 'react'

export type SetOpenedT = (opened: boolean) => void

export const useOpened = (propsOpened?: boolean, onToggle?: SetOpenedT, initOpened = false) => {
	const [localOpened, setLocalOpened] = useState(initOpened)

	const openedPassed = propsOpened !== undefined
	const opened = openedPassed ? (propsOpened as boolean) : localOpened

	const setOpened = useCallback<SetOpenedT>(
		opened => {
			!openedPassed && setLocalOpened(opened)
			onToggle && onToggle(opened)
		},
		[onToggle, openedPassed],
	)

	return [opened, setOpened] as const
}
