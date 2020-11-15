import { useState, useLayoutEffect, useMemo } from 'react'
import { debounce } from 'utils'
import { DebounceOptionsT } from 'utils/debounce'

export type UseInputDebounceOptionsT<E extends { target: { value: string } }> = {
	value: string
	setValue: (value: string) => void
	onChange?: (e: E) => void
	debounceOptions?: DebounceOptionsT
}

export const useInputDebounce = <E extends { target: { value: string } }>({
	value,
	setValue,
	onChange,
	debounceOptions,
}: UseInputDebounceOptionsT<E>) => {
	const [localValue, setLocalValue] = useState(value)

	useLayoutEffect(() => {
		setLocalValue(value)
	}, [value])

	const setValueWrap = useMemo(() => {
		const debouncedSetValue = debounce(setValue, debounceOptions)
		return (e: E) => {
			if (onChange !== undefined) onChange(e)
			const newValue = e.target.value
			setLocalValue(newValue)
			debouncedSetValue(newValue)
		}
	}, [setValue, onChange, debounceOptions])

	return { value: localValue, onChange: setValueWrap }
}
