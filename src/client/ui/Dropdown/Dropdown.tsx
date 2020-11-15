import React, { useState, useRef, useEffect, useLayoutEffect, FC } from 'react'
import { a, useSpring } from '@react-spring/web'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getHeight } from 'utils/getHeight'

import s from './Dropdown.m.scss'
import clsx from 'clsx'

const openedSpring = { iconTransform: 'rotate(0deg)', transform: 'translateX(0px)', opacity: 1 }
const closedSpring = { iconTransform: 'rotate(-90deg)', transform: 'translateX(40px)', opacity: 0 }
const getInitialSpring = (opened: boolean) => () => ({
	...(opened ? openedSpring : closedSpring),
	height: opened ? 'auto' : 0,
	config: { tension: 250, friction: 17, clamp: true },
})

export type DropdownP = {
	label: React.ReactChild
	initOpened?: boolean
	opened?: boolean
	toggleOnRight?: boolean
	toggleClassName?: string
	toggleIconClassName?: string
} & React.HTMLAttributes<HTMLDivElement>

export const Dropdown: FC<DropdownP> = ({
	label,
	initOpened,
	opened: propsOpened,
	toggleOnRight,
	toggleClassName,
	toggleIconClassName,
	children,
	className,
	...restProps
}) => {
	const [opened, setOpened] = useState(() =>
		initOpened !== undefined ? initOpened : propsOpened !== undefined ? propsOpened : false,
	)
	useLayoutEffect(() => {
		if (propsOpened) setOpened(true)
	}, [propsOpened])

	const [render, setRender] = useState(opened)
	useLayoutEffect(() => {
		if (opened) setRender(true)
	}, [opened])

	// Animate opening/closing
	const contentRef = useRef<HTMLDivElement>(null)
	const [{ iconTransform, height, ...spring }, setSpring] = useSpring(getInitialSpring(opened))
	useEffect(() => {
		if (render) {
			const newSpring = opened
				? { ...openedSpring, height: getHeight(contentRef), onRest: () => {} }
				: { ...closedSpring, height: 0, onRest: () => setRender(false) }
			setSpring(newSpring)
		}
	}, [opened, render, setSpring])

	// Animate content height change
	const attachObserver = opened && render
	useEffect(() => {
		const content = contentRef.current
		if (attachObserver && content) {
			const observer = new ResizeObserver(() => setSpring({ height: content.offsetHeight }))
			observer.observe(content)
			return () => observer.unobserve(content)
		}
	}, [attachObserver, setSpring])

	return (
		<div className={clsx(s.Dropdown, className)} {...restProps}>
			<button className={s.Toggle + (toggleClassName ? ' ' + toggleClassName : '')} onClick={() => setOpened(!opened)}>
				{toggleOnRight && label}
				<a.div
					className={
						s.ToggleIcon +
						(toggleIconClassName ? ' ' + toggleIconClassName : '') +
						(toggleOnRight ? ' ' + s.ToggleIconOnRight : '')
					}
					style={{ transform: iconTransform }}
				>
					<FontAwesomeIcon icon={faChevronDown} />
				</a.div>
				{!toggleOnRight && label}
			</button>

			<a.div className={s.ContentWrap} style={{ height }}>
				<a.div className={s.Content} ref={contentRef} style={spring as any}>
					{render && children}
				</a.div>
			</a.div>
		</div>
	)
}
