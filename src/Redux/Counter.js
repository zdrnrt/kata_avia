import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './Actions';

function Counter({ counter, inc, dec, rnd }) {
	return (
		<>
			<h2>Redux</h2>
			<div id="redux">
				<div id="counter">{counter}</div>
				<div>
					<button id="inc" onClick={inc}>
						INC
					</button>
					<button id="dec" onClick={dec} style={{ margin: '0 5px' }}>
						DEC
					</button>
					<button id="rnd" onClick={rnd}>
						RND
					</button>
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		counter: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, actions)(Counter);
