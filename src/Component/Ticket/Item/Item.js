import React from 'react';
import './Item.scss';

function Segment(data) {
	const segment = data.data;
	const segmentTextList = [
		'пересадок',
		'пересадка',
		'пересадки',
	];
	let segmentText = segmentTextList[0];
	if (segment.stops.length == 1 ){
		segmentText = segmentTextList[1];
	} else if (segment.stops.length > 1 &&  segment.stops.length < 5){
		segmentText = segmentTextList[2];
 	}
	// const segmentText = segment.stops.length == 0
	return (
		<div className="ticket-item__segment segment">
			<div className="segment__item">
				<div className="segment__key">
					{segment.origin} – {segment.destination}
				</div>
				<div className="segment__value">?? 10:45 – 08:00</div>
			</div>
			<div className="segment__item">
				<div className="segment__key">В пути</div>
				<div className="segment__value">
					{Math.floor(segment.duration / 60)}ч - {segment.duration - 60 * Math.floor(segment.duration / 60)}м
				</div>
			</div>
			<div className="segment__item">
				<div className="segment__key">{segment.stops.length} {segmentText}</div>
				<div className="segment__value">{segment.stops.join(', ')}</div>
			</div>
		</div>
	);
}

export default function Item(data) {
	// console.log('Ticket.Item', data);
	const ticket = data.ticket;
	let segmentList = ticket.segments.map(function (el, i) {
		// console.log(el, i);
		return <Segment key={i} data={el} />;
	});
	return (
		<div className="ticket-item ticket-list__item">
			<header className="ticket-item__header">
				<div className="ticket-item__price">{ticket.price} Р</div>
				<div className="ticket-item__company">
					<img
						src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
						className="ticket-item__company-logo"
					/>
				</div>
			</header>
			{segmentList}
		</div>
	);
}
