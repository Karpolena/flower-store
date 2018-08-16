import React from "react";


const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">FLOWER STORE</div>
            <ul className="header__nav">
                <li className="header__nav-item">Главная</li>
                <li className="header__nav-item">Цветы</li>
                <li className="header__nav-item">Купить</li>
                <li className="header__nav-item">Войти</li>
            </ul>
        </header>
    )
}

export default Header;