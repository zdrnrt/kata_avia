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
	if (state.status.error) {
		return state;
	}
	switch (action.type) {
		case 'FILTER':
			let filterValue = state.filter.value;
			if (action.payload == 'ALL') {
				for (let filterItem in filterValue) {
					filterValue[filterItem] = !filterValue['ALL'];
				}
			} else {
				filterValue[action.payload] = !filterValue[action.payload];
				filterValue['ALL'] = true;
				for (let el in filterValue) {
					if (el != 'ALL') {
						filterValue['ALL'] = filterValue['ALL'] && filterValue[el];
					}
				}
			}

			return { ...state, filter: { value: filterValue } };
		case 'SORT':
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
