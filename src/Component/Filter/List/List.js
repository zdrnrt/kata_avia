import React from 'react';
import './List.scss';
import Item from '../Item';

export default function List(filter) {
	// console.log('Filter.List', filter);

	const filterItems = [
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
	];

	const filters = filterItems.map(function(el, i) {
		return <Item key={i} action={filter.action} el={el} checked={filter.filter.value[el.value]} />
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
