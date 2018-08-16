
import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./../scss/main.scss";
// import { Provider } from "react-redux";
// import store from "./store/index";
import { HashRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

render (
    <HashRouter>
        <Switch>
            <Route path="*" component={App}/>
        </Switch>    
    </HashRouter>
    ,document.getElementById("root")
)
