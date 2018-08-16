import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/Not-found";
import Mondial from "./pages/page-flowers/Mondial";

const Content = () => {
    return(
        <content className="content">
            <Home /> 
            {/* <Page /> */}
            <NotFound />
            <Mondial />
        </content>
    );
}

export default Content;
