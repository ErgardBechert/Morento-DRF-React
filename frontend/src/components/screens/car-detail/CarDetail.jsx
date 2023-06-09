import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CarServices from '../../../services/CarServices';
import CarInfo from '../../blocks/Car/CarInfo/CarInfo';

import './CarDetail.scss';
import CarCommentForm from '../../blocks/Car/CarCommeendsList/CarCommentForm/CarComponentForm';
import CarCommentList from '../../blocks/Car/CarCommeendsList/CarCommentList';


export default function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    CarServices.getCarDetail(id)
      .then((response) => {
        setCar(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const fetchComments = () => {
    CarServices.getCarComment(car.id)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='car-detail'>
      <div className='car-detail__header'>
        <div>
          <img src='/image/car/Nissan.png' alt='' />
        </div>

        <CarInfo car={car} />
      </div>

      <CarCommentList
        carId={id}
        comments={comments}
        fetchComments={fetchComments}
      />
      <CarCommentForm carId={car.id} fetchComments={fetchComments} isUpdating={false} />
    </div>
  );
}