import React from 'react';
import css from './css.module.css'
const Header = () => {
    return (
        <header>
                <div className={css.logo}>LOGO</div>
                <div className={css.center}>
                    <ul className={css.centerUl}>
                        <li>Проекты</li>
                        <li>О компании</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className={css.languace}>
                    <p>RU</p>
                    <p>EN</p>
                </div>
        </header>
    );
};

export default Header;