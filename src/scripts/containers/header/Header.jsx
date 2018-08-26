import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
 

class Header extends Component {
    render() {
        return (
            <AppBar position="static" color="default">
                <header className="header">
                    <div className="header__logo">FLOWER STORE</div>
                    <nav className="header__nav">
                        <NavLink exact to="/"className="header__nav-item">Главная</NavLink>
                        <NavLink to="/about" className="header__nav-item">О проекте</NavLink>
                        <NavLink to="/basket" className="header__nav-item">
                        <i className="material-icons">shopping_basket</i>
                            <div className="header__count">
                                {this.props.basketFlowers.length}
                            </div>                                       
                        </NavLink>
                        <NavLink to="/login" className="header__nav-item">Войти</NavLink>
                    </nav> 
                </header>       
            </AppBar>
        )
    }
} 

export default connect(store => {
    return {
        basketFlowers: store.basketStore.basketFlowers
    } 
})(Header);

Header.propTypes = {
    basketFlowers: PropTypes.array
}
