import React from 'react'

type HandlerT = (e: React.MouseEvent) => void

const doubleClick = (handler: HandlerT): HandlerT => {
	let clicks = 0
	return e => {
		clicks += 1
		if (clicks === 2) handler(e)
		setTimeout(() => (clicks = 0), 500)
	}
}

export default doubleClick
