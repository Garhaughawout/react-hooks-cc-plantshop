import React from "react";
import { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function Search() {
    const [search, setSearch] = useState("")

    useEffect(() => {
        console.log(search)
    })

    function searchPlants() {
        fetch(`http://localhost:6001/plants?name=${search}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
  
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
