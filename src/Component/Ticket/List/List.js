import React from 'react';
import './List.scss';
import Item from '../Item';

export default function List(props) {
	let content = null;
	if (props.status.error) {
		content = (
			<div className="ticket-list__error">
				Во время работы произошла ошибка, проверьте интернет соединение и обновите страницу
			</div>
		);
	} else if (props.status.load && props.tickets.length == 0) {
		content = <div className="ticket-list__empty">Рейсов, подходящих под заданные фильтры, не найдено</div>;
	} else {
		content = props.tickets.map((el, i) => <Item key={i} ticket={el} />);
	}
	return (
		<div className={!props.status.load ? 'ticket-list--load' : 'ticket-list'}>
			{content}
			{!props.stop && (
				<button className="ticket-list__more" onClick={() => props.action()}>
					Загрузить ещё
				</button>
			)}
		</div>
	);
}
