import React from "react";


const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">FLOWER STORE</div>
            <ul className="header__nav">
                <li>Главная</li>
                <li>Цветы</li>
                <li>Купить</li>
                <li>Войти</li>
            </ul>
        </header>
    )
}

export default Header;