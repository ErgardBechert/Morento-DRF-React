import React, { useState, useEffect } from 'react';
import CarComment from './CarComment/CarComment';
import CarServices from '../../../../services/CarServices';
import './CarCommentList.scss';

export default function CarCommentList({ carId, comments }) {
    const [carComments, setCarComments] = useState([]);

    useEffect(() => {
      if (comments.length > 0) {
        setCarComments(comments);
      } else {
        CarServices.getCarComment(carId)
          .then((response) => {
            setCarComments(response.data);
          })
          .catch((error) => console.log(error));
      }
    }, [carId, comments]);

  return (
    <div className='comments main-block'>
      {carComments.map((comment) => (
        <CarComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
} 