import { useState, useMemo, useEffect } from 'react'
import { debounce } from 'utils'

export const useHoverOpen = (showDelay = 0, hideDelay = 0) => {
	const [opened, setOpened] = useState(false)

	const [bind, cancel] = useMemo(() => {
		const [show, cancelShow] = debounce(() => setOpened(true), { ms: showDelay, withCancel: true })
		const [hide, cancelHide] = debounce(() => setOpened(false), { ms: hideDelay, withCancel: true })
		return [
			{
				onMouseEnter: () => {
					cancelHide()
					show()
				},
				onMouseLeave: () => {
					cancelShow()
					hide()
				},
			},
			() => {
				cancelShow()
				cancelHide()
			},
		]
	}, [showDelay, hideDelay])
	useEffect(() => cancel, [cancel])

	return [bind, opened, setOpened] as const
}
