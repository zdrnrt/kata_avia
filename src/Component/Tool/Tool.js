import React from 'react';

export function getSearchId() {
	return fetch('https://aviasales-test-api.kata.academy/search').then((response) => {
		if (response.ok) {
			return response.json();
		}
	});
}
export function loadTikets(searchId) {
	return fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`).then((response) => {
		if (response.ok) {
			return response.json();
		}
	});
}
