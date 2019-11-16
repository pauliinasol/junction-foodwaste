import React from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import styled from "styled-components";

export const RecipeViewStyle = styled.div`
  padding: 20px;
`;

export const RecipeView = () => {
  return (
    <RecipeViewStyle>
      <RecipeCard />
      {/* <RecipeCard />
      <RecipeCard /> */}
    </RecipeViewStyle>
  );
};
