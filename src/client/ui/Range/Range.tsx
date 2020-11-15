import React, { FC, useMemo, useRef, useState, useEffect, useCallback } from 'react'
import { a, useSpring } from '@react-spring/web'
import clsx from 'clsx'

import s from './Range.m.scss'

import { throttle } from 'utils/throttle'

const initSpring = () => ({
	width: '100%',
	left: '0%',
	buttonLeft: '100%',
})

export type RangeValueT = [string, string]

export type RangeP = React.HTMLAttributes<HTMLDivElement> & {
	ticks: string[]
	value?: RangeValueT
	setValue?: (value: RangeValueT) => void
}

export const Range: FC<RangeP> = ({ ticks, value: propsValue, setValue: propsSetValue, className, ...restProps }) => {
	const [value, setLocalValue] = useState<RangeValueT>(() => [ticks[0], ticks[ticks.length - 1]])
	const setValue = useMemo(() => propsSetValue || setLocalValue, [propsSetValue])
	useEffect(() => {
		if (propsValue !== undefined && propsValue.every(tick => ticks.includes(tick))) setLocalValue(propsValue)
	}, [propsValue, ticks])

	const [{ left, buttonLeft, width }, setSpring] = useSpring(initSpring)
	const setSpringByValue = useCallback(
		(value: RangeValueT, clamp = false) => {
			const n1 = ticks.indexOf(value[0])
			const n2 = ticks.indexOf(value[1])
			if (n1 !== -1 && n2 !== -1) {
				const n = ticks.length - 1
				const left = (n1 / n) * 100
				const buttonLeft = (n2 / n) * 100
				const width = buttonLeft - left
				setSpring({
					left: left + '%',
					buttonLeft: buttonLeft + '%',
					width: width + '%',
					config: { clamp, tension: 360, friction: 28 },
				})
			}
		},
		[ticks, setSpring],
	)

	useEffect(() => {
		setSpringByValue(value, true)
	}, [value, setSpringByValue])

	const ref = useRef<HTMLDivElement>(null)
	const valueRef = useRef(value)
	valueRef.current = value
	const [onMouseDown1, onMouseDown2] = useMemo(() => {
		const getOnMouseDown = (buttonN: 1 | 2) => () => {
			const rangeElement = ref.current
			if (rangeElement) {
				const rect = rangeElement.getBoundingClientRect()
				const length = rect.width
				const clientStart = rect.x
				const tickInterval = length / (ticks.length - 1)

				const [min, max] =
					buttonN === 2
						? [(ticks.indexOf(valueRef.current[0]) + 1) * tickInterval, length]
						: [0, (ticks.indexOf(valueRef.current[1]) - 1) * tickInterval]

				const getValue = (e: MouseEvent) => {
					let x = e.clientX - clientStart
					if (x < min) x = min
					else if (x > max) x = max

					const tickIndex = Math.round(x / tickInterval)
					const newValue: RangeValueT =
						buttonN === 2 ? [valueRef.current[0], ticks[tickIndex]] : [ticks[tickIndex], valueRef.current[1]]

					return newValue
				}

				const onMouseMove = throttle((e: MouseEvent) => setSpringByValue(getValue(e)), { onStart: true, ms: 14 })
				document.addEventListener('mousemove', onMouseMove)
				document.addEventListener('mouseup', function remove(e) {
					document.removeEventListener('mousemove', onMouseMove)
					document.removeEventListener('mouseup', remove)
					// Wait until animation being finished
					setTimeout(() => setValue(getValue(e)), 300)
				})
			}
		}

		return [getOnMouseDown(1), getOnMouseDown(2)]
	}, [setValue, setSpringByValue, ticks])

	return (
		<div className={clsx(s.Range, className)} {...restProps}>
			<div ref={ref} className={s.RangeTicks}>
				{ticks.map(tick => (
					<div key={tick}>
						<p>{tick}</p>
					</div>
				))}
			</div>

			<a.div className={s.RangeBar} style={{ width, left }}>
				<button onMouseDown={onMouseDown1} />
			</a.div>
			<a.button style={{ left: buttonLeft }} onMouseDown={onMouseDown2} />
		</div>
	)
}
