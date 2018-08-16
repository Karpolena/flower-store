import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/Not-found";

const Content = () => {
    return(
        <content className="content">
            <Home /> 
            {/* <Page /> */}
            <NotFound />
        </content>
    );
}

export default Content;
