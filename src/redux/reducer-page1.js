export const page1Word = (state = 'awesome', action) => {
	let page1Word = state.page1Word;
	switch(action.type) {
		case 'togglePage1Word':
			return (state == 'awesome') ? 'cool' : 'awesome'
		default:
			return state
	}
}