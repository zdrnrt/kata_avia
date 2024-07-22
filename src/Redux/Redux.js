import React from "react";
import {render} from "react-dom/client";
import {createStore, bindActionCreators} from 'redux';
import {Provider} from 'react-redux';

import Reducer from './Reducer'
import Counter from './Counter'
// import {inc, dec, rnd} from './Actions'
import * as actions from './Actions'


function Redux () {
    // const store = createStore(Reducer);
    // const {dispatch} = store;
    
    // const [state, stateChange] = React.useState(store.getState());

    /*
    const bindActionCreator = (creator, dispatch) => (...args) => {
        dispatch(creator( ...args ))
    }
    */

    // const { inc, dec, rnd} = bindActionCreators(
    //     /*
    //     {
    //         incDispatch: inc,
    //         decDispatch: dec,
    //         rndDispatch: rnd
    //     },
    //     */
    //     actions,
    //     dispatch
    // )

    // const incDispatch = () => bindActionCreator(inc, dispatch);
    // const decDispatch = () => bindActionCreator(dec, dispatch);
    // const rndDispatch = () => bindActionCreator(rnd, dispatch);

    // document.getElementById('counter').innerText = store.getState();
  
    return (
      <Counter 
        //   counter={state} actions={{inc, dec, rnd}}
        />
    );
}

export default Redux;