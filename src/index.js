import React from "react";
import ReactDOM from "react-dom";
import APP from "./component/App";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxPromise from "redux-promise";
import reducers from "./reducers";
import "./style.css";


const createMiddleware = applyMiddleware(ReduxPromise)(createStore)
ReactDOM.render(
    <Provider store = {createMiddleware(reducers)}>
        <APP/>
    </Provider>,
    document.getElementById("root")
);