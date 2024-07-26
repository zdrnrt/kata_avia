import React from 'react';
import './Item.scss';

export default function Item(props) {
	const el = props.el;
	return (
		<label className="sort-item sort-list__item">
			<input
				type="checkbox"
				name="sort"
				checked={props.checked}
				value={el.value}
				className="sort-item__input"
				onChange={(e) => props.action(e.target.value)}
			/>
			<span className="sort-item__title">{el.title}</span>
		</label>
	);
}
