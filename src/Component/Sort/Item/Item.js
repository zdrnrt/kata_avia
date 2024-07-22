import React from 'react';
import './Item.scss';

export default function Item(sort) {
	const data = sort.sort;
	console.log(data);
	return (
		<label className="sort-item sort-list__item">
			<input type="radio" name="sort" value={data.value} className="sort-item__input" />
			<span className="sort-item__title">{data.title}</span>
		</label>
	);
}

// <div className="sort-item sort-list__item">
// 	<h3>Tab/Item</h3>
// </div>
