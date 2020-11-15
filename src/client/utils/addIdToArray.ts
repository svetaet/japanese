const addIdToArray = (state: string[], action: { payload: string }) =>
	state.includes(action.payload) ? state : [...state, action.payload]

export default addIdToArray
