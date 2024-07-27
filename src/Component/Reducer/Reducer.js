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
		tickets: [
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
			{
				price: 31730,
				carrier: 'DP',
				segments: [
					{
						origin: 'MOW',
						destination: 'HKT',
						date: '2025-03-15T17:16:05.864Z',
						duration: 1206,
						stops: ['IST', 'HKG'],
					},
					{
						origin: 'HKT',
						destination: 'MOW',
						date: '2025-11-25T07:28:09.038Z',
						duration: 984,
						stops: ['DOH'],
					},
				],
			},
			{
				price: 91420,
				carrier: 'AK',
				segments: [
					{
						origin: 'MOW',
						destination: 'HKT',
						date: '2025-05-11T15:15:17.431Z',
						duration: 1157,
						stops: ['IST', 'DEL', 'DEL'],
					},
					{
						origin: 'HKT',
						destination: 'MOW',
						date: '2026-03-21T11:50:22.927Z',
						duration: 900,
						stops: [],
					},
				],
			},
			{
				price: 16320,
				carrier: 'S7',
				segments: [
					{
						origin: 'MOW',
						destination: 'HKT',
						date: '2024-06-26T16:44:20.817Z',
						duration: 1119,
						stops: ['HKG', 'HKG'],
					},
					{
						origin: 'HKT',
						destination: 'MOW',
						date: '2024-10-01T14:54:31.740Z',
						duration: 1200,
						stops: ['IST', 'DEL'],
					},
				],
			},
			{
				price: 52250,
				carrier: 'FV',
				segments: [
					{
						origin: 'MOW',
						destination: 'HKT',
						date: '2024-05-31T22:23:43.071Z',
						duration: 975,
						stops: ['IST'],
					},
					{
						origin: 'HKT',
						destination: 'MOW',
						date: '2025-03-05T12:52:27.208Z',
						duration: 723,
						stops: ['DXB'],
					},
				],
			},
			{
				price: 54360,
				carrier: 'DP',
				segments: [
					{
						origin: 'MOW',
						destination: 'HKT',
						date: '2025-02-09T09:38:16.230Z',
						duration: 1184,
						stops: ['JNB', 'HKG', 'JNB'],
					},
					{
						origin: 'HKT',
						destination: 'MOW',
						date: '2025-02-19T08:28:52.530Z',
						duration: 1146,
						stops: ['HKG', 'DOH'],
					},
				],
			},
			{
				price: 42990,
				carrier: 'U6',
				segments: [
					{
						origin: 'MOW',
						destination: 'HKT',
						date: '2024-06-20T13:56:15.715Z',
						duration: 848,
						stops: [],
					},
					{
						origin: 'HKT',
						destination: 'MOW',
						date: '2025-03-18T06:11:09.245Z',
						duration: 1245,
						stops: ['HKG', 'IST'],
					},
				],
			},
			{
				price: 101680,
				carrier: 'AK',
				segments: [
					{
						origin: 'MOW',
						destination: 'HKT',
						date: '2025-03-14T20:28:39.371Z',
						duration: 838,
						stops: [],
					},
					{
						origin: 'HKT',
						destination: 'MOW',
						date: '2025-08-30T17:18:13.864Z',
						duration: 902,
						stops: ['HKG', 'JNB'],
					},
				],
			},
			{
				price: 65400,
				carrier: 'DP',
				segments: [
					{
						origin: 'MOW',
						destination: 'HKT',
						date: '2024-11-13T03:42:50.216Z',
						duration: 1362,
						stops: ['IST', 'JNB', 'DXB'],
					},
					{
						origin: 'HKT',
						destination: 'MOW',
						date: '2025-03-28T01:27:16.183Z',
						duration: 1280,
						stops: ['JNB', 'JNB', 'DXB'],
					},
				],
			},
			{
				price: 25280,
				carrier: 'DP',
				segments: [
					{
						origin: 'MOW',
						destination: 'HKT',
						date: '2024-08-17T10:41:10.377Z',
						duration: 562,
						stops: [],
					},
					{
						origin: 'HKT',
						destination: 'MOW',
						date: '2025-03-01T08:28:20.350Z',
						duration: 542,
						stops: [],
					},
				],
			},
		],
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
