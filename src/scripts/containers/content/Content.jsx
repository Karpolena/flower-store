import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Flower from "./pages/Flower";
import { Switch, Route } from "react-router-dom";

const Content = () => {
    return(
        <content className="content">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/flower/:id" component={Flower} />
                <Route path="*" component={NotFound}/>
            </Switch>
        </content>
    );
}

export default Content;
