import React from "react";
import PlantCard from "./PlantCard";
import { useState, useEffect } from "react";


function PlantList() {
  const [plants, setPlants] = useState([])
  

    useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => setPlants(data))
    }, [])

    console.log(plants)
    
    const renderPlants = plants.map(plant => {
        return <PlantCard key={plant.id} {...plant} />
    })
  
    return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
