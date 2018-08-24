import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import BasketDisplay from "../../components/basket/BasketDisplay";


class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo">FLOWER STORE</div>
                <nav className="header__nav">
                    <NavLink exact to="/"className="header__nav-item">Главная</NavLink>
                    <NavLink to="/about" className="header__nav-item">О проекте</NavLink>
                    <NavLink to="/basket" className="header__nav-item">
                        <i className="material-icons">
                            shopping_basket
                        </i>
                        <BasketDisplay className="labelForHeader" value={this.props.count}/>
                    </NavLink>
                    <NavLink to="/login" className="header__nav-item">Войти</NavLink>
                </nav>
            </header>
        )
    }
} 

export default connect(store => {
    return {
        count: store.basketStore.count
    } 
})(Header);

Header.propTypes = {
    count: PropTypes.number
}