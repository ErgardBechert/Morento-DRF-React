import React, { useEffect, useState } from 'react'
import style from './ratingStars.module.scss'

import starIcon from '../../../images/rating/star.svg'
import hollowStar from '../../../images/rating/hollowStar.svg'

export default function StarRating({ getStars, countStars }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  
    useEffect(() => {
      setRating(countStars);
    }, [countStars]);
  
    const handleStarClick = (index) => {
      setRating(index);
      getStars(index); // Вызываем функцию getStars с выбранным количеством звезд
    };

   
    return (
        <div className={style.starRating}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <div
            key={index}
            onClick={() => handleStarClick(index)} // Изменяем обработчик клика
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <img src={index <= (hover || rating) ? starIcon : hollowStar} alt="" />
          </div>
        );
      })}
    </div>
    );
}