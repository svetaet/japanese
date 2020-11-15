const defOptions = {
	ms: 300,
	onStart: false,
	withCancel: false,
}
export type DebounceOptionsT = Partial<typeof defOptions>
type AnyFuncT = (...args: any) => any
type TimerT = number | undefined

const resetTimer = (timer: TimerT, ms: number, func: AnyFuncT) => {
	clearTimeout(timer)
	return window.setTimeout(func, ms)
}

function debounce<F extends AnyFuncT>(
	func: F,
	options: { ms?: number; onStart?: boolean; withCancel: true },
): [(...args: Parameters<F>) => void, () => void]

function debounce<F extends AnyFuncT>(func: F, options?: DebounceOptionsT): (...args: Parameters<F>) => void

function debounce<A extends any[]>(func: (...args: A) => any, options?: Partial<typeof defOptions>) {
	const { ms, onStart, withCancel } = { ...defOptions, ...options }
	let onStartExecuted = false
	let timer: TimerT

	const debouncedFunc: (...args: A) => void = onStart
		? (...args) => {
				if (onStartExecuted) {
					onStartExecuted = true
					func(...args)
				} else {
					timer = resetTimer(timer, ms, () => {
						timer = undefined
						onStartExecuted = false
						func(...args)
					})
				}
		  }
		: (...args) => {
				timer = resetTimer(timer, ms, () => func(...args))
		  }

	return withCancel ? [debouncedFunc, () => clearTimeout(timer)] : debouncedFunc
}

export { debounce }
