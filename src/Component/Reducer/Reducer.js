import React, { act } from 'react';
import { load } from '../Tool/Tool';

const initialState = {
	filter: {
		value: {
			ALL: false,
			0: false,
			1: false,
			2: false,
			3: false,
		},
	},
	sort: {
		value: null,
	},
	searchId: null,
	status: {
		load: false,
		error: null,
	},
	ticket: {
		stop: true,
		tickets: [],
	},
};

export default function Reducer(state = initialState, action) {
	// console.log('Reducer', action);
	switch (action.type) {
		case 'FILTER':
			if (state.status.error) {
				return state;
			}
			let filterValue = state.filter.value;
			if (action.payload == 'ALL') {
				for (let filterItem in filterValue) {
					filterValue[filterItem] = !filterValue['ALL'];
				}
			} else {
				filterValue[action.payload] = !filterValue[action.payload];
			}
			if (filterValue['0'] && filterValue['1'] && filterValue['2'] && filterValue['3']) {
				filterValue['ALL'] = true;
			} else {
				filterValue['ALL'] = false;
			}
			return { ...state, filter: { value: filterValue } };
		case 'SORT':
			if (state.status.error) {
				return state;
			}
			return { ...state, sort: { value: action.payload != state.sort.value ? action.payload : null } };
		case 'GETSEARCHID':
			console.log(action.payload);
			if (!action.payload.error) {
				return {
					...state,
					searchId: action.payload,
				};
			} else {
				return {
					...state,
					status: { load: true, error: action.payload.error },
				};
			}
		case 'LOADTICKETS':
			if (!action.payload.error) {
				return {
					...state,
					status: { load: true, error: null },
					ticket: {
						stop: action.payload.stop,
						tickets: [...state.ticket.tickets, ...action.payload.tickets],
					},
				};
			} else {
				return {
					...state,
					status: { load: true, error: action.payload.error },
				};
			}
		case 'LOADMORE':
			return {
				...state,
				status: { load: false, error: null },
			};

		default:
			return state;
	}
}
