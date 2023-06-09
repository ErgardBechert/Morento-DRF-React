import { React, useEffect, useState} from 'react'
import { useParams } from 'react-router'
import CarServices from '../../../services/CarServices';
import CarInfo from '../../blocks/Car/CarInfo/CarInfo';
import CarCommentList from '../../blocks/Car/CarCommeendsList/CarCommentList';
import './CarDetail.scss';


export default function CarDetail() {
  const { id } = useParams()

  const [car, setCar] = useState({})

  useEffect(() => {
    CarServices.getCarDetail(id)
      .then((response) => {
        setCar(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='car-detail'>
      <div className='car-detail__header'>
          <div>
          <img src="/image/car/Nissan.png" alt=""/>
          </div>
          
          <CarInfo car={car}/>
      </div>
      <CarCommentList carId={id} />
    </div>
  );
}