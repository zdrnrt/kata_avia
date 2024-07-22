import React from 'react';
import Item from '../Item';
import './List.scss';

export default function List(sort) {
	console.log('Sort.List', sort.list.list);
	const sorts = sort.list.list.map((el, i) => <Item key={i} sort={el} />);
	return (
		<div className="sort">
			<div className="sort__list">{sorts}</div>
		</div>
	);
}
