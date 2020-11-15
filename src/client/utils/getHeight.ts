export const getHeight = (elementRef: React.RefObject<HTMLElement>, fallback = 100) =>
	elementRef.current ? elementRef.current.offsetHeight : fallback
