import React, { useState } from "react";
import { Input, Button, List, Icon } from "semantic-ui-react";
import styled from "styled-components";

const ButtonStyle = styled.div`
padding: 10px;
`

const HeaderStyle = styled.div`
font-weight: bold;
`

function Cupboard({ values, onAdd, onRemove }) {
  const [newIngredient, setNewIngredient] = useState("");

  const ingredients = values.map(item => {
    return (
      <List.Item key={item}>
        <Button icon onClick={() => onRemove(item)}>
          <Icon name="trash" />
        </Button>
        {item}
      </List.Item>
    );
  });

  const handleIngredientChange = event => {
    setNewIngredient(event.target.value);
  };

  const handleSubmit = () => {
    onAdd(newIngredient);
    setNewIngredient('')
  };

  return (
    <div>
    <HeaderStyle>This is what you have in your cupboard</HeaderStyle>
      <List>{ingredients}</List>
      <Input value={newIngredient} onChange={handleIngredientChange} />
      <ButtonStyle><Button onClick={handleSubmit}>Add ingredient</Button></ButtonStyle>
    </div>
  );
}

export default Cupboard;
