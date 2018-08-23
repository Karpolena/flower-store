import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">FLOWER STORE</div>
            <nav className="header__nav">
                <NavLink exact to="/"className="header__nav-item">Главная</NavLink>
                <NavLink to="/about" className="header__nav-item">О проекте</NavLink>
                <NavLink to="/buy" className="header__nav-item"><i className="material-icons">
shopping_basket
</i></NavLink>
                <NavLink to="/login" className="header__nav-item">Войти</NavLink>
            </nav>
        </header>
    )
}

export default Header;