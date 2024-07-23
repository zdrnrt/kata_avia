import React from 'react';
import Header from '../Header';
import FilterList from '../Filter/List';
import SortList from '../Sort/List';
import TicketList from '../Ticket/List';
import Tool from '../Tool';
import {filterSet, sortSet} from '../Action';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



function Content({ filter, sort, ticket, filterSet, sortSet }) {
	// console.log(actions)
	// console.log('Content', filter, sort, ticket);
	return (
		<div className="app">
			<Header />
			<div className="app__container">
				<div className="app__filter">
					<FilterList list={filter} action={filterSet} />
				</div>
				<div className="app__content">
					<SortList list={sort} action={sortSet} />
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

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({filterSet, sortSet}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
// export default connect(mapStateToProps, actions)(Content);
