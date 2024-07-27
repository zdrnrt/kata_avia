import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import './App.scss';
import Content from '../Content';
import Reducer from '../Reducer';

/*
function loggerMiddleware(store) {
	return function (next) {
		return function(action){
			const result = next(action);
			console.log('loggerMiddleware', result, store.getState());
			return result;
		}
	}
}
*/

const loggerMiddleware = (store) => (next) => (action) => {
	const result = next(action);
	console.log('loggerMiddleware', result, store.getState());
	return result;
};

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

export default function App() {
	const store = createStore(Reducer, composeEnhancers(applyMiddleware(loggerMiddleware, thunk)));

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
