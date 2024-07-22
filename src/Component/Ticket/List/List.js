import React from 'react';
import './List.scss';
import Item from '../Item';

export default function List(ticket) {
	// console.log('Ticket.List', ticket.list);
	let tickets = ticket.list.map((el, i) => <Item key={i} ticket={el} />);
	return <div className="ticket-list">{tickets}</div>;
}
