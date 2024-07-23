import React from 'react';

const initialState = {
	filter: {
		value: [2],
		list: [
			{
				title: 'Все',
				value: 'ALL',
			},
			{
				title: 'Без пересадок',
				value: '0',
			},
			{
				title: '1 пересадка',
				value: '1',
			},
			{
				title: '2 пересадки',
				value: '2',
			},
			{
				title: '3 пересадки',
				value: '3',
			},
		],
	},
	sort: {
		value: '',
		list: [
			{
				title: 'Самый дешевый',
				value: 'CHEAP',
			},
			{
				title: 'Самый быстрый',
				value: 'FAST',
			},
			{
				title: 'Оптимальный',
				value: 'OPTIMAL',
			},
		],
	},
	ticket: [
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
};

export default function Reducer(state = initialState, action) {
	console.log('Reducer', action);
	switch (action.type) {
		case 'FILTER':
			return {...state, filter: {...state.filter, value: action.payload}};
		case 'SORT':
			return {...state, sort: {...state.sort, value: action.payload}};
		default:
			return state;
	}
}