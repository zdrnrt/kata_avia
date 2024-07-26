export const filterSet = (value) => {
	console.log('FILTER', value);
	return { type: 'FILTER', payload: value };
};
export const sortSet = (value) => {
	console.log('SORT', value);
	return { type: 'SORT', payload: value };
};

export const addTikets = (value) => {
	return { type: 'TICKET', payload: value };
};

export const loadTickets = (value) => {
	return (dispatch) => {
		console.log(value);
		setTimeout(() => {
			console.log('loadTickets', value);
			dispatch(sortSet(value));
		}, 3000);
	};
};
