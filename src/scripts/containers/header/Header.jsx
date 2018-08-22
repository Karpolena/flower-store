import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const Header = () => {
    return (
        
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography  variant="title" color="inherit">
                        <header className="header">
                            <div className="header__logo">FLOWER STORE</div>
                            <nav className="header__nav">
                                <NavLink exact to="/"className="header__nav-item">Главная</NavLink>
                                <NavLink to="/about" className="header__nav-item">О проекте</NavLink>
                                <NavLink to="/buy" className="header__nav-item">Купить</NavLink>
                                <NavLink to="/login" className="header__nav-item">Войти</NavLink>
                            </nav>
                        </header>
                    </Typography>
                </Toolbar>
            </AppBar>
            
        
    )
}

export default Header;