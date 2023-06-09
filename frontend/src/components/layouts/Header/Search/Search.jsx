import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CarServices from '../../../../services/CarServices';
import './Search.scss';
import CarList from '../../../blocks/Car/CarList/CarList';

export default function Search() {
  const location = useLocation();

  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('search');

    if (query) {
  
      fetchData(query);
    }
  }, [location.search]);

  const fetchData = async (query) => {
    try {
      const response = await CarServices.getSearchCar(query);
      const cars = response.data;
      setCarList(cars);
    } catch (error) {
      console.log(error);
    }
  };

  return (

      <CarList car={carList}/>

  );
}