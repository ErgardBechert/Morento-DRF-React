import React, { useState, useEffect } from 'react';
import CarServices from '../../../../../services/CarServices';
import StarRating from '../../../../UI/stars/RatingStars';

export default function CarCommentForm({carId, fetchComments }) {
  const [comment, setComment] = useState({car_id: 0, text: '', grade: 0});

  const [stars, setStars] = useState(0)

  useEffect(() => {
      setStars(0)
  },[])

  const getStars = ( count ) => {
    setStars(count)
}

const createCarComment = async (commentData) => {
  const response = await CarServices.postCreateCarComment(commentData);
  console.log(response);
  fetchComments(); // Обновление списка комментариев после создания
};

const handleCommentChange = (event) => {
  setComment({
    ...comment,
    text: event.currentTarget.value,
    car_id: carId,
    grade: stars
  });
};   

  return (
    <div className='car-comment-form'>
    <div className='rating-container'>
      <StarRating getStars={getStars} countStars={stars} />
    </div>
    <textarea
      className='comment-input'
      placeholder='Enter your comment...'
      value={comment.text}
      onChange={handleCommentChange}
    />
    <button className='submit-button' onClick={() => createCarComment(comment)}>
      Submit
    </button>
  </div>
  );
}