import React from 'react';
import Item from '../Item';
import './List.scss';

export default function List(sort) {
	const sortList = [
		{
			title: 'Самый дешевый',
			value: 'CHEAP',
		},
		{
			title: 'Самый быстрый',
			value: 'FAST',
		},
		{
			title: 'Оптимальный',
			value: 'OPTIMAL',
		},
	];
	console.log(sort.list.value);
	const sorts = sortList.map((el, i) => <Item key={i} el={el} cheched={el.value == sort.list.value} action={sort.action} />);
	return (
		<div className="sort">
			<div className="sort__list">{sorts}</div>
		</div>
	);
}
