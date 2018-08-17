import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Flower from "./pages/Flower";
import About from "./pages/About";
import Buy from "./pages/Buy";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";



const Content = () => {
    return(
        <content className="content">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/flower/:id" component={Flower} />
                <Route path="/about" component={About} />
                <Route path="/buy" component={Buy} />
                <Route path="/login" component={Login} />
                <Route path="*" component={NotFound}/>
            </Switch>
        </content>
    );
}

export default Content;
