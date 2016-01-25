export const device = (state = '', action) => {
	let device = state.device;
	switch(action.type) {
		case 'setDevice':
			return action.device
		default:
			return state
	}
}

export const url = (state = '/', action) => {
	let url = state.url;
	switch(action.type) {
		case 'goToHome':
			return '/'
		case 'goToPage1':
			return '/page1'
		default: 
			return state
	}
}

export const count = (state = 0, action) => {
	let count = state.count;
	switch(action.type) {
		case 'increaseCount':
			return state + 1
		case 'decreaseCount':
			return state - 1
		default:
			return state
	}
}