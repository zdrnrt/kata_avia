import React from "react";
import ReactDOM from "react-dom/client";

import {createStore} from "redux";
import App from "./Component/App";
import Redux from "./Redux/Redux";
import Reducer from './Redux/Reducer'

import {bindActionCreators} from 'redux';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(Reducer);
// store.subscribe(update);

// const update = () => {
    root.render(
        <Provider store={store}>
            <Redux />
        </Provider>
    );
// }

// update();
