import React, { useState, useEffect } from 'react';
import Rating from '../../../../UI/stars/Rating';
import './CarComment.scss';
import StarRating from '../../../../UI/stars/RatingStars';
import UserServices from '../../../../../services/UserServices';

export default function CarComment({ comment, onUpdateComment, onDeleteComment}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedText, setUpdatedText] = useState(comment.text);
  const [stars, setStars] = useState(comment.grade);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        const userId = await UserServices.getUserId();
        setCurrentUser({ id: userId.user_id });
        console.log('Current user ID:', userId.user_id);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCurrentUser();
  }, []);

  const handleUpdate = () => {
    if (isUpdating) {
      onUpdateComment({ ...comment, text: updatedText, grade: stars });
    } else {
      setIsUpdating(true);
    }
  };

  const handleCancelUpdate = () => {
    setIsUpdating(false);
    setUpdatedText(comment.text);
    setStars(comment.grade);
  };

  const handleTextChange = (event) => {
    setUpdatedText(event.target.value);
  };

  const handleRatingChange = (count) => {
    setStars(count);
  };

  const isCurrentUserComment = currentUser && comment.user.id === currentUser.id;


  return (
    <div className="comment">
      <div className="comment__header">
        <div className="user">
          <img className="user-avatar" src="/image/test_profile.jpg" alt="User Profile" />
          <div className="user-block">
            <p className="user-name bold__text-lg">{comment.user.user_name}</p>
            <span className="email medium__text">{comment.user.user_name}</span>
          </div>
        </div>
        <div className="comment__info">
          <span>{comment.created_at}</span>
          {isUpdating ? (
            <StarRating getStars={handleRatingChange} countStars={stars} />
          ) : (
            <Rating countStars={comment.grade} />
          )}
        </div>
      </div>
      <div className="comment__text">
        {isUpdating ? (
          <textarea value={updatedText} onChange={handleTextChange} />
        ) : (
          <p>{comment.text}</p>
        )}
      </div>
      <div className="comment__buttons">
        {isCurrentUserComment && isUpdating ? (
          <>
            <button onClick={handleUpdate}>save</button>
            <button onClick={handleCancelUpdate}>cancel</button>
          </>
        ) : (
          isCurrentUserComment && <button onClick={handleUpdate}>update</button>
        )}
        {isCurrentUserComment && (
          <button onClick={() => onDeleteComment(comment.id)}>delete</button>
        )}
      </div>
    </div>
  );
}