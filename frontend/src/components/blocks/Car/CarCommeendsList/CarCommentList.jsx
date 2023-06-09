import React, { useState, useEffect } from 'react';
import CarComment from './CarComment/CarComment';
import CarServices from '../../../../services/CarServices';
import './CarCommentList.scss';

export default function CarCommentList({ carId }) {
    const [comments, setCarComments] = useState([]);

    useEffect(() => {
      CarServices.getCarComment(carId)
        .then((response) => {
          setCarComments(response.data);
        })
        .catch((error) => console.log(error));
    }, [carId]);

  return (
    <div className='comments'>
      {comments.map((comment) => (
        <CarComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}