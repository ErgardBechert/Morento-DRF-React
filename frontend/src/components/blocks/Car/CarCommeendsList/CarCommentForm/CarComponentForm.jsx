import React, { useState, useEffect } from 'react';
import CarServices from '../../../../../services/CarServices';
import StarRating from '../../../../UI/stars/RatingStars';
import './CarComponentForm.scss';

export default function CarCommentForm({ carId, fetchComments, isUpdating }) {
  const [comment, setComment] = useState({ car_id: 0, text: '', grade: 0 });
  const [stars, setStars] = useState(0);

  useEffect(() => {
    setStars(0);
  }, []);

  const getStars = (count) => {
    setStars(count);
  };

  const createCarComment = async (commentData) => {
    const response = await CarServices.postCreateCarComment(commentData);
    console.log(response);
    fetchComments();
  };

  const updateCarComment = async (updatedComment) => {
    const response = await CarServices.updateCarComment(updatedComment);
    console.log(response);
    fetchComments();
  };

  const handleCommentChange = (event) => {
    setComment({
      ...comment,
      text: event.currentTarget.value,
      car_id: carId,
      grade: stars,
    });
  };

  return (
    <div className='car-comment-form'>
      <div className='car-comment'>
      <div className='rating-container'>
        <StarRating getStars={getStars} countStars={stars} />
      </div>
      <textarea
        className='comment-input'
        placeholder='Enter your comment...'
        value={comment.text}
        onChange={handleCommentChange}
      />
      <button
        className='button button-primary'
        onClick={() => {
            createCarComment(comment);
        }}
      >
      Отправить
      </button>
    </div>
      </div>
      
  );
}