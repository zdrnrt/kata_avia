import React from 'react';
import './List.scss';
import Item from '../Item';

export default function List(filter) {
	// console.log('Filter.List', filter, filter.list.value);
	const filters = filter.list.list.map(function(el, i) {
		return <Item key={i} action={filter.action} filter={{el, value: filter.list.value}} />
	});

	return (
		<div className="filter">
			<header className="filter__header">
				<h3 className="filter__title">Количество пересадок</h3>
			</header>
			<div className="filter__list">{filters}</div>
		</div>
	);
}
