import { useEffect, useState } from "react";
import CarList from "../../blocks/Car/CarList/CarList";
import CarServices from "../../../services/CarServices";

function Home() {

const [cars, setCars] = useState([])

useEffect(() => {
      CarServices.getCarList()  // Вызов метода getCarList на экземпляре userServices
            .then((response) => {
                setCars(response.data);
            })
            .catch((error) => console.log(error));

            // log
}, [])

// useEffect(() => {console.log(cars)}, [cars])

    return (
        <CarList car={cars} />
       
    );
  }
  
export default Home;