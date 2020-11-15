const removeIdFromArray = (state: string[], action: { payload: string }) => state.filter(id => id !== action.payload)

export default removeIdFromArray
