import React, {useState} from "react";
import styled from "styled-components";
import { Input, Button, Label } from "semantic-ui-react";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const InputStyle = styled.div`
  padding-right: 5px;
`;

export const Search = () => {
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const addIngredient = (event) => {
    event.preventDefault()
    setIngredients(ingredients.concat(newIngredient))
    setNewIngredient('')
  }

  const handleIngredientChange = (event) => {
    setNewIngredient(event.target.value)
  }

  const removeElem = (item) => {
    let newIng = ingredients.filter(ing => ing !== item)
    setIngredients(newIng)
  }
  
  return (
    <SearchContainer>
      <SearchRow>
        <form onSubmit={addIngredient}>
          <InputStyle>
            <Input 
              value={newIngredient}
              onChange={handleIngredientChange}
            />
          </InputStyle>
          <Button type="submit">+</Button>
        </form>
      <Button>Search</Button>
      </SearchRow>
      <SearchRow>
        {ingredients.map((ing) => <Label onClick={() => removeElem(ing)} as="a" key={ing}>{ing}</Label>)}
      </SearchRow>
    </SearchContainer>
  );
};
