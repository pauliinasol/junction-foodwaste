import React from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import styled from "styled-components";
import { Card } from "semantic-ui-react";
import { Search } from "../Search/Search";

export const RecipeViewStyle = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

export const SearchStyle = styled.div`
  padding: 20px;
`;

export const RecipeView = ({ recipes }) => {
  return (
    <div>
      <SearchStyle>
        <Search />
      </SearchStyle>
      <RecipeViewStyle>
        <Card.Group>
          {recipes.map(recipe => (
            <RecipeCard key={recipe.heading} recipe={recipe} />
          ))}
        </Card.Group>
      </RecipeViewStyle>
    </div>
  );
};
