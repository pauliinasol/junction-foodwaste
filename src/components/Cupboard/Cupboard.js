import React, { useState } from "react";
import { Input, Button, List, Icon } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
`;

const CupboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CupboardLabel = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

function Cupboard() {
  const [existingIngredients, setExistingIngredients] = useState([
    "Flour",
    "Sugar",
    "Soya sauce"
  ]);
  const [newIngredient, setNewIngredient] = useState("");

  const ingredients = existingIngredients.map(item => {
    return (
      <List.Item key={item}>
        <Button icon onClick={() => handleRemove(item)}>
          <Icon name="trash" />
        </Button>
        {item}
      </List.Item>
    );
  });

  const handleRemove = item => {
    let newIngs = existingIngredients.filter(ing => ing !== item);
    setExistingIngredients(newIngs);
  };

  const addIngridient = event => {
    event.preventDefault();
    setExistingIngredients(existingIngredients.concat(newIngredient));
    setNewIngredient("");
  };

  const handleIngredientChange = event => {
    setNewIngredient(event.target.value);
  };

  return (
    <CupboardContainer>
      <CupboardLabel>Your cupboard currently has:</CupboardLabel>
      <List>{ingredients}</List>
      <form onSubmit={addIngridient}>
        <Input value={newIngredient} onChange={handleIngredientChange} />
        <Wrapper>
          <Button type="submit">Add ingredient</Button>
        </Wrapper>
      </form>
    </CupboardContainer>
  );
}

export default Cupboard;
