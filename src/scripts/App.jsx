
import React, { Component } from "react";
import Header from "./containers/header/Header";
import AsideMenu from "./containers/menu/Aside-menu";
import Content from "./containers/content/Content";

class App extends Component {
    render() {
        return (
            <main className="main">
                <Header /> 
                <div className="wrap-content">
                    <AsideMenu />
                    <Content />
                </div>
            </main>
        )
    }
}
export default App;