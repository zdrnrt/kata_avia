import React from 'react';
import './List.scss';
import Item from '../Item';

export default function List(ticket) {
	let tickets = ticket.list.map((el, i) => <Item key={i} ticket={el} />);
	return <div className="ticket-list">{tickets}</div>;
}
