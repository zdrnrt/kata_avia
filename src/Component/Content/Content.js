import React from 'react';
import Header from '../Header';
import FilterList from '../Filter/List';
import SortList from '../Sort/List';
import TicketList from '../Ticket/List';
// import Tool from '../Tool';
// import { filterSet, sortSet } from '../Action';
import * as Action from '../Action';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const action = Action.default;

const mapStateToProps = (state) => {
	return {
		filter: state.filter,
		sort: state.sort,
		searchId: state.searchId,
		status: state.status,
		ticket: state.ticket,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(action, dispatch);
};

function Content({ searchId, status, filter, sort, ticket, filterSet, sortSet, getSearchId, loadTickets, loadMore }) {
	if (!searchId && !status.error) {
		getSearchId();
	}
	if (!status.load && searchId) {
		loadTickets(searchId);
	}
	let ticketList = ticket.tickets;
	let filterState = false;
	for (let el in filter.value) {
		filterState = filterState || (filter.value[el] && !filter.value['ALL']);
	}
	if (filterState) {
		ticketList = ticketList.filter((ticket) => {
			let result = 0;
			for (let el in filter.value) {
				if (filter.value[el]) {
					if (
						ticket.segments[0].stops.length == Number(el) &&
						ticket.segments[1].stops.length == Number(el)
					) {
						result++;
					}
				}
			}
			return !!result;
		});
	}
	if (sort.value) {
		switch (sort.value) {
			case 'CHEAP':
				ticketList = ticketList.sort((a, b) => a.price - b.price);
				break;
			case 'FAST':
				ticketList = ticketList.sort(
					(a, b) =>
						a.segments[0].duration +
						a.segments[1].duration -
						(b.segments[0].duration + b.segments[1].duration)
				);
				break;
			case 'OPTIMAL':
				ticketList = ticketList.sort(
					(a, b) =>
						a.price +
						a.segments[0].duration +
						a.segments[1].duration -
						(b.price + b.segments[0].duration + b.segments[1].duration)
				);
				break;
			default:
				ticketList = ticketList;
				break;
		}
	}

	return (
		<div className="app">
			<Header />
			<div className="app__container">
				<div className="app__filter">
					<FilterList filter={filter} action={filterSet} />
				</div>
				<div className="app__content">
					<SortList list={sort} action={sortSet} />
					<TicketList status={status} stop={ticket.stop} tickets={ticketList} action={loadMore} />
				</div>
			</div>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
