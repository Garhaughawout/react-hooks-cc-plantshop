import React from "react";
import { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function Search() {
    const [search, setSearch] = useState("")
    const [plant, setPlant] = useState([])
    

    function searchPlants() {
        fetch(`http://localhost:6001/plants?name=${search}`)
        .then(resp => resp.json())
        .then(data => setPlant(data))
    }
    console.log(plant)

    const filteredPlants = plant.map(plant => {
        return <PlantCard key={plant.id} {...plant} />
    })

    

    return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={searchPlants}
      />
    </div>
  );
}

export default Search;
