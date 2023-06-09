import React, { useState, useEffect } from 'react';
import CarServices from '../../../../services/CarServices';  // Исправленный импорт
import CarListItem from './CarListItem';
import './CarList.scss';


export default function CarList({car}) {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        setCars(car)
    }, [car]);

    return (
        <div className="">
            <div class="subtitle">
                    Рекомендовые автомобили
            </div>
            <div className='cars'>
                {cars.map(car => 
                    <CarListItem 
                        key={car.id} 
                        car={car}
                    />
                )}
            </div>

        </div>
        
    );
}

