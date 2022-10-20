import React from 'react';
import css from './css.module.css'

const footer = () => {
    return (
        <footer>
            <div className={css.divFooter}>
            <div className={css.text12}>
                <div className={css.footerLogo}>LOGO</div>
                <div className={css.footerCompany}>© Company 2022. All rights reserved.</div>
            </div>
            <div className={css.text1}>
                <div>Услуги</div>
                <ul className={css.ulLi}>
                    <li>Support and development</li>
                    <li>UI/UX and product design</li>
                    <li>Progressive Web Applications (PWA)</li>
                </ul>
            </div>
            <div className={css.text1}>
                <div> Компания</div>
                <ul className={css.ulLi}>
                    <li>О компании</li>
                    <li>Проекты</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div className={css.text1}>
                <div> Контакты</div>
                <ul className={css.ulLi}>
                    <li>Скачать презентацию</li>
                    <li>+7 (499) 999-99-99</li>
                    <li>info@site.com</li>
                </ul>
                <div>Политика конфиденциальноcти</div>
            </div>
            </div>
        </footer>
    );
};

export default footer;