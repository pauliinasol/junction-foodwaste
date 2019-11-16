import React from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import styled from "styled-components";
import { Card } from "semantic-ui-react";

export const RecipeViewStyle = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

export const RecipeView = ({ recipes }) => {
  return recipes.map(recipe => (
    <RecipeViewStyle>
      <Card.Group>
        <RecipeCard key={recipe.heading} recipe={recipe} />
      </Card.Group>
    </RecipeViewStyle>
  ));
};
