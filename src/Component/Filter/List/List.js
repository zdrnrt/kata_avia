import React from 'react';
import './List.scss';
import Item from '../Item';

export default function List(filter) {
	// console.log('Filter.List', filter);
	const filters = filter.list.list.map((el, i) => <Item key={i} filter={el} />);

	return (
		<div className="filter">
			<header className="filter__header">
				<h3 className="filter__title">Количество пересадок</h3>
			</header>
			<div className="filter__list">{filters}</div>
		</div>
	);
}
