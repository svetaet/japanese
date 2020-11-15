const scrollToChild = (parent: HTMLElement, child: HTMLElement, offset = 0) =>
	parent.scrollTo({ top: child.offsetTop - offset, behavior: 'smooth' })

export default scrollToChild
