import React from 'react';

export function getSearchId() {
	fetch('https://aviasales-test-api.kata.academy/search').then((response) => {
		console.log('Tool', response);
		if (response.ok) {
			return response.json();
		}
	});
}
export function load() {}
