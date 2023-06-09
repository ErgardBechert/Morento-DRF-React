import { React } from 'react'
import CarDetailHeader from '../CarDetailHeader/CarDetailHeader';
import './CarInfo.scss';

export default function CarInfo({car}) {
    return (
    <div className='car-detail__info'>
        <CarDetailHeader car={car}/>
        
        <p className='car-detail__description regular__text-lg'>{car.description}</p>
        
        <ul className='car-detail__options'>
            <li className='regular__text-lg'>Type Car: <span>{car.type}</span></li>
            <li className='regular__text-lg'>Capacity: <span>{car.capacity}</span></li>
            <li className='regular__text-lg'>Steering: <span>{car.steering}</span></li>
            <li className='regular__text-lg'>Gasoline: <span>{car.gasoline}</span></li>
        </ul>
    </div>
    );
}