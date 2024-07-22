import React from 'react';
import './Item.scss';

export default function Item(filter) {
	// console.log('Filter.Item', filter);
	const data = filter.filter;
	return (
		<label className="filter__item filter-item">
			<input type="checkbox" value={data.value} className="filter-item__input" />
			<span className="filter-item__checkbox"></span>
			<span className="filter-item__title">{data.title}</span>
		</label>
	);
}
