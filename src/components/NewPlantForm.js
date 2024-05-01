import React from "react";
import { useState, useEffect } from "react";
function NewPlantForm() {
  
    const [newPlant, setNewPlant] = useState({})

    function handleChange(e) {
        console.log(e.target.value)
        
        setNewPlant({
            ...newPlant,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:6001/plants", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlant)
        })
    }

  
    return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button onClick={handleSubmit} type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
