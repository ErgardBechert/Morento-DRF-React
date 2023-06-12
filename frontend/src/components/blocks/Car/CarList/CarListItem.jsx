import React from 'react';
import './CarList.scss';
import { Link } from 'react-router-dom';

function CarListItem({ car }) {
    return (
        <div className="car">
            <div className="car__header">
                <div className="car__left">
                    <div className="car__name bold__text bold__text-lg">{car.name}</div>
                    <div className="car__type bold__text">{car.type}</div>
                </div>
                <div className="car__right">
                    <img src="/image/header/heart.svg" className="car__grade" alt=""/>
                </div>
            </div>
            <Link to={`/cars/${car.id}`} className="car__image"> {/* Добавляем ссылку */}
                <img src="/image/car/Nissan.png" alt=""/>
            </Link>
            <ul className="car__info">
                <li>
                    <img src="/image/car/gas-station.svg" alt=""/>
                    <p className="medium__text">{car.gasoline}Л</p>
                </li>
                <li>
                    <img src="/image/car/circle.svg" alt=""/>
                    <p className="medium__text">{car.steering}</p>
                </li>
                <li>
                    <img src="/image/car/2user.svg" alt=""/>
                    <p className="medium__text">{car.capacity} чел.</p>
                </li>
            </ul>
            <div className="car__footer">
                <div className="price bold__text"><span className="bold__text-lg">{car.price}</span>/ в день</div>
                <a href="#" className="button button-primary">Арендовать</a>
            </div>
        </div>
    )
}

export default CarListItem