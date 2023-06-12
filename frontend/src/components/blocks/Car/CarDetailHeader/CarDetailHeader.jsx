import React from 'react';
import Rating from '../../../UI/stars/Rating';
import './CarDetailHeader.scss';

export default function CarDetailHeader({ car }) {
  return (
    <div className='car-detail__header'>
      <p className='bold__text-xxl'>{car.name}</p>
      <div className='grade'>
        <Rating countStars={car.grade} />
        <span className='grade-count'>{car.grade}</span>
      </div>
    </div>
  );
}