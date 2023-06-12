import React from 'react';
import Rating from '../../../../UI/stars/Rating';
import './CarComment.scss';

export default function CarComment({ comment }) {
  return (
    <div className='comment'>
      <div className='comment__header'>
        <div className='user'>
          <img className='user-avatar' src='/image/test_profile.jpg' alt='User Profile' />
          <div className='user-block'>
            <p className='user-name bold__text-lg'>{comment.user.user_name}</p>
            <span className='email medium__text'>{comment.user.user_name}</span>
          </div>
        </div>
        <div className='comment__info'>
          <span>{comment.created_at}</span>
          <Rating countStars={comment.grade} />
        </div>
      </div>
      <p className='comment__text'>{comment.text}</p>
      <div className='comment__buttons'>
        <button>delete</button>
        <button>update</button>
      </div>
    </div>
  );
}