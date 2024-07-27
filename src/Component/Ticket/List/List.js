import React from 'react';
import './List.scss';
import Item from '../Item';

export default function List(props) {
	console.log('List', props);
	let content = null;
	if (props.status.error) {
		content = (
			<div className="ticket-list__error">
				Во время работы произошла ошибка, проверьте интернет соединение и обновите страницу
			</div>
		);
	} else {
		content = props.ticket.tickets.map((el, i) => <Item key={i} ticket={el} />);
	}
	return (
		<div className={!props.status.load ? 'ticket-list--load' : 'ticket-list'}>
			{content}
			{!props.ticket.stop && (
				<button className="ticket-list__more" onClick={() => props.action()}>
					Загрузить ещё
				</button>
			)}
		</div>
	);
}
