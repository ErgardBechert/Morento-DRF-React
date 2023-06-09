import React, { useEffect, useState } from "react";
import CarList from "../../blocks/Car/CarList/CarList";
import CarServices from "../../../services/CarServices";
import Filter from "../../layouts/Filter/Filter";
import './Cars.scss';

function Cars() {
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    fetchData(); // Initial call with empty filters and minPrice as 5000
  }, []);

  const fetchData = async (types = [], capacities = [], minPrice = 5000) => {
    try {
      let response;
      if (types.length === 0 && capacities.length === 0 && minPrice === 5000) {
        response = await CarServices.getCarList();
      } else {
        response = await CarServices.getFilterCar(types, capacities, minPrice);
      }
      const cars = response.data;
      setFilteredCars(cars);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cars-section">
      <Filter setFilteredCars={setFilteredCars} fetchData={fetchData} />
      <CarList car={filteredCars} />
    </div>
  );
}

export default Cars;