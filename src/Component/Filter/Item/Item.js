import React from 'react';
import './Item.scss';

export default function Item(props) {
	const el = props.el;
	return (
		<label className="filter__item filter-item">
			<input type="checkbox" value={el.value} checked={props.checked} className="filter-item__input" onChange={(e) => {props.action(e.target.value);}} />
			<span className="filter-item__checkbox"></span>
			<span className="filter-item__title">{el.title}</span>
		</label>
	);
}
