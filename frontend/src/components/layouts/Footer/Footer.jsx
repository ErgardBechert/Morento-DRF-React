import React from 'react'
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__left">
            <div className="header__logo logo">
                MORENT
            </div>
            <p>Наше видение состоит в том, чтобы обеспечить удобство и помочь увеличить ваш бизнес продаж.</p>
        </div>
        <div className="footer__right">
            <ul className="footer__list">
                <li><a href="#">О нас</a></li>
                <li><a href="#">Как это работает</a></li>
                <li><a href="#">Избранное</a></li>
                <li><a href="#">Партнерство</a></li>
                <li><a href="#">Деловые отношения</a></li>
            </ul>
            <ul className="footer__list">
                <li><a href="#">Сообщество</a></li>
                <li><a href="#">События</a></li>
                <li><a href="#">Блог</a></li>
                <li><a href="#">Подкаст</a></li>
                <li><a href="#">Пригласить друга</a></li>
            </ul>
            <ul className="footer__list">
                <li><a href="#">Социальные сети</a></li>
                <li><a href="#">Discord</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
            </ul>
        </div>
    </footer>
  )
}
