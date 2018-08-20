
import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./../scss/main.scss";
import { Provider } from "react-redux";
import store from "./store/index";
import { HashRouter } from "react-router-dom";

render (
    <HashRouter>
        <Provider store={store}>
            <App />    
        </Provider>
    </HashRouter>
    ,document.getElementById("root")
)

