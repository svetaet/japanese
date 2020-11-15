import { useRef, useEffect } from 'react'
import { usePrevious } from 'hooks'

// Pass a variable to see if it has been changed between renders
export const useChanged = <T>(variable: T) => {
	const firstRender = useRef(true)
	useEffect(() => {
		firstRender.current = false
	}, [])

	const previous = usePrevious(variable)
	return firstRender.current ? false : previous !== variable
}
