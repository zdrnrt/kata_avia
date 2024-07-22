import React from 'react';
import Header from '../Header';
import FilterList from '../Filter/List';
import SortList from '../Sort/List';
import TicketList from '../Ticket/List';
import Tool from '../Tool';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as action from '../Action';

function Content({ filter, sort, ticket }) {
	console.log('Content', filter, sort, ticket);
	return (
		<div className="app">
			<Header />
			<div className="app__container">
				<div className="app__filter">
					<FilterList list={filter} />
				</div>
				<div className="app__content">
					<SortList list={sort} />
					<TicketList list={ticket} />
				</div>
			</div>
		</div>
	);
}

//export default Content;

const mapStateToProps = (state) => {
	return {
		filter: state.filter,
		sort: state.sort,
		ticket: state.ticket,
	};
};
/*

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};
*/

export default connect(mapStateToProps)(Content);
// export default connect(mapStateToProps, actions)(Content);
