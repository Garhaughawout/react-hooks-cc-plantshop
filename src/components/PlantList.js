import React from "react";
import PlantCard from "./PlantCard";
import { useState, useEffect } from "react";


function PlantList() {
  const [plants, setPlants] = useState([])
  

  fetchPlants()
  function fetchPlants() {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => renderPlants(data))
  }

  function renderPlants(arr) {
    const plantList = arr.map(plant => {
      return <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>
    })
    setPlants(plantList)
  }
  
    return (
    <ul className="cards">{plants}</ul>
  );
}

export default PlantList;
