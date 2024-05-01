import React from "react";
import { useState, useEffect } from "react";


function PlantCard({id, name, image, price}) {
   const [inStock, setInStock] = useState(true)
  
   function handleClick() {
        setInStock(!inStock)
   }
  
    return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
