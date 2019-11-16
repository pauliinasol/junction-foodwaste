import React, { useState } from "react";

function Cupboard() {
  const [existingIngredients, setExistingIngredients] = useState(["flour", "sugar", "soya sauce"]);
  const [newIngredient, setNewIngredient] = useState("");

  const ingredients = existingIngredients.map((item) => {
    return (
      <li key={item}>{item}</li>
    )
  })

  const addIngridient = (event) => {
    event.preventDefault()
    setExistingIngredients(existingIngredients.concat(newIngredient))
    setNewIngredient('')
  }

  const handleIngredientChange = (event) => {
    setNewIngredient(event.target.value)
  }

  return (
    <div>
      <ul>{ingredients}</ul>
      <form onSubmit={addIngridient}>
        <input 
          value={newIngredient}
          onChange={handleIngredientChange} 
        />
        <button type="submit">Add ingridient</button>
      </form>
    </div>
  )
}

export default Cupboard;
