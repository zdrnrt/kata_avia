import React from 'react';
import { createStore, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import './App.scss';
import Content from '../Content';
import Reducer from '../Reducer';

export default function App() {
	const store = createStore(Reducer);
	// console.log(store.getState());
	return (
		<Provider store={store}>
			<Content />
			{/* <div className="app">
				<Header />
				<div className="app__container">
					<div className="app__filter">
						<FilterList />
					</div>
					<div className="app__content">
						<TabList />
						<TicketList />
					</div>
				</div>
			</div> */}
		</Provider>
	);
}
