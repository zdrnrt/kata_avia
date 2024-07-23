import React from 'react';
import Item from '../Item';
import './List.scss';

export default function List(sort) {
	console.log('Sort.List', sort);
	const sorts = sort.list.list.map((el, i) => <Item key={i} sort={el} action={sort.action} />);
	return (
		<div className="sort">
			<div className="sort__list">{sorts}</div>
		</div>
	);
}
