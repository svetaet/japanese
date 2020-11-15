export type PositionT = 'right' | 'left' | 'bottom' | 'top'

const invertedPositionsMap: { [key in PositionT]: PositionT } = {
	top: 'bottom',
	bottom: 'top',
	left: 'right',
	right: 'left',
}
const invertPosition = (p: PositionT) => invertedPositionsMap[p]

export default invertPosition
