import React from 'react';
import { useState } from 'react';
import css from '../Body/css.module.css'
import img from '../img/Group.png'
const Body = () => {
    const [click, setClick] = useState(true)
    const [send, setSend] = useState(false)

    const handleClick = () => {
        setClick(false)
        console.log(click, 'dscsd');
        setTimeout(() => {
            setSend(true)
        }, 
        2000);
    }

    const styleOn = css.img2
    const styleOff = css.img1

return (
    <body className={css.bodyDiv}>
        <div className={css.center}>
            <div> <p>Главная-Контакты</p></div>
            <div className={css.text1}>Мы рядом</div>
            <p>
                Заполните форму ниже и мы свяжимся с вами. Не любите<br /> формы? Напишите нам почту <a className={css.site} href="">info@site.com</a>
            </p>
            <div>
                <div className={css.divInput}>
                    <input className={css.input1} type="text" placeholder='Ваше имя' />
                    <input className={css.input2} type="text" placeholder='Ваш E-Mail' />
                </div>
                <div>
                    <input className={css.input3} type="text" placeholder='Комментарий' />
                </div>
            </div>
            <div className={css.radio}>
                <input type="radio" /><p>Согласен с Политикой конфиденциальности</p>
            </div>
        </div>
        <div className={css.divBtn}>
            <div className={css.divDiv}>
               { <img style={{display: send && 'none'}} className={click ? styleOn : styleOff} src={img} alt="" />}
            </div>
            <button className={css.button}
                onClick={handleClick}>{click ? 'Отправить' : 'Сообщение отправлено'}</button>
        </div>
    </body>
);
};

export default Body;