import React, { useState } from "react";
import { Input, Button, List, Icon } from 'semantic-ui-react'

function Cupboard() {
  const [existingIngredients, setExistingIngredients] = useState(["flour", "sugar", "soya sauce"]);
  const [newIngredient, setNewIngredient] = useState("");

  const ingredients = existingIngredients.map((item) => {
    return (
      <List.Item key={item}>
        <Button icon onClick={() => handleRemove(item)}><Icon name="trash"/></Button>
        {item} 
      </List.Item>
    )
  })

  const handleRemove = (item) => {
    let newIngs = existingIngredients.filter(ing => ing !== item)
    setExistingIngredients(newIngs);
  }

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
      <List>{ingredients}</List>
      <form onSubmit={addIngridient}>
        <Input 
          value={newIngredient}
          onChange={handleIngredientChange} 
        />
        <Button type="submit">Add ingridient</Button>
      </form>
    </div>
  )
}

export default Cupboard;
