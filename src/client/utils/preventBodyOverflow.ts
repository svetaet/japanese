const preventBodyOverflow = () => {
	if (
		document.documentElement.scrollHeight === document.documentElement.clientHeight &&
		document.body.style.overflowY !== 'scroll'
	) {
		const overflowYSave = document.body.style.overflowY
		document.body.style.overflowY = 'hidden'
		document.addEventListener('mouseup', function restoreOverflowY() {
			document.body.style.overflowY = overflowYSave
			document.removeEventListener('mouseup', restoreOverflowY)
		})
	}
	if (
		document.documentElement.scrollWidth === document.documentElement.clientWidth &&
		document.body.style.overflowX !== 'scroll'
	) {
		const overflowXSave = document.body.style.overflowY
		document.body.style.overflowX = 'hidden'
		document.addEventListener('mouseup', function restoreOverflowX() {
			document.body.style.overflowX = overflowXSave
			document.removeEventListener('mouseup', restoreOverflowX)
		})
	}
}

export default preventBodyOverflow
