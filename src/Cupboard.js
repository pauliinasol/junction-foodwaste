import React, { useState } from "react";
import { Input, Button, List, Icon } from "semantic-ui-react";

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
  };

  return (
    <div>
      <List>{ingredients}</List>
      <Input value={newIngredient} onChange={handleIngredientChange} />
      <Button onClick={handleSubmit}>Add ingridient</Button>
    </div>
  );
}

export default Cupboard;
