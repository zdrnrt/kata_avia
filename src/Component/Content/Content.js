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

//export default Content;

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
		console.log('content getSearchId');
		getSearchId();
	}
	if (!status.load && searchId) {
		console.log('content loadTickets');
		loadTickets(searchId);
	}
	// console.log('content', status)
	return (
		<div className="app">
			<Header />
			<div className="app__container">
				<div className="app__filter">
					<FilterList filter={filter} action={filterSet} />
				</div>
				<div className="app__content">
					<SortList list={sort} action={sortSet} />
					<TicketList status={status} ticket={ticket} action={loadMore} />
				</div>
			</div>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
