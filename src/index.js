import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
// import App from './App';
import router from "./router";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import store from "./store";

const Root = ({ store }) => <Provider store={store}>{router}</Provider>;

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
