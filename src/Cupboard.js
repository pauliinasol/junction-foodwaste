import React, { useState } from "react";

function Cupboard() {
  const [existinIngredients] = useState(["flour", "sugar", "soya sauce"]);

  const ingredients = existinIngredients.map((item) => {
    return (
      <li>{item}</li>
    )
  })

  return (
    <ul>{ingredients}</ul>
  )
}

export default Cupboard;
