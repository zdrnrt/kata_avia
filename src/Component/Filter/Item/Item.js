import React from 'react';
import './Item.scss';

export default function Item(props) {
	// console.log('Filter.Item', props);
	const el = props.filter.el;
	let checked = false;
	// for (let value of props.filter.value){
	// }

	return (
		<label className="filter__item filter-item">
			<input type="checkbox" value={el.value} checked={el.value === props.filter.value} className="filter-item__input" onChange={(e) => {props.action(e.target.value);}} />
			<span className="filter-item__checkbox"></span>
			<span className="filter-item__title">{el.title}</span>
		</label>
	);
}
