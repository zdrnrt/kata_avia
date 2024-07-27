import React from 'react';
import Tool from '../Tool';

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

export const loadMore = (value) => {
	return { type: 'LOADMORE', payload: {} };
};

export const getSearchId = () => {
	return (dispatch) => {
		return Tool.getSearchId()
			.then((response) => {
				console.log('action getSearchId');
				console.log(response);
				dispatch({ type: 'GETSEARCHID', payload: response.searchId });
			})
			.catch((error) => {
				dispatch({ type: 'GETSEARCHID', payload: { error: error } });
			});
	};
};

export const loadTickets = (value) => {
	return (dispatch) => {
		return Tool.loadTikets(value)
			.then((response) => {
				console.log('action loadTickets');
				console.log(response);
				dispatch({ type: 'LOADTICKETS', payload: response });
			})
			.catch((error) => {
				dispatch({ type: 'LOADTICKETS', payload: { load: false, error: error } });
			});
	};
};
