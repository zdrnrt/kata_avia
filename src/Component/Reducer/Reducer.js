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
		value: '',
	},
	ticket: {
		status: {
			load: false,
			error: null,
		},
		list: [
			{
				price: 19950,
				carrier: 'DP',
				segments: [
					{
						origin: 'MOW',
						destination: 'HKT',
						date: '2024-07-07T19:23:37.881Z',
						duration: 1214,
						stops: ['DXB', 'JNB'],
					},
					{
						origin: 'HKT',
						destination: 'MOW',
						date: '2024-10-03T10:37:28.129Z',
						duration: 1425,
						stops: ['DOH', 'HKG', 'JNB'],
					},
				],
			},
		],
	},
};

export default function Reducer(state = initialState, action) {
	// console.log('Reducer', action);
	switch (action.type) {
		case 'FILTER':
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
			let sortValue = null;
			if (action.payload != state.sort.value) {
				sortValue = action.payload;
			}
			return { ...state, sort: { value: sortValue } };
		case 'TIKECT':
			return {
				...state,
				ticket: {
					status: { load: action.payload.status, error: action.payload.error },
					list: [...state.ticket.list, action.payload.tickets],
				},
			};
		default:
			return state;
	}
}
