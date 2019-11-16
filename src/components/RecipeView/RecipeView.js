import React from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import styled from "styled-components";
import { Search } from "../Search/Search";

export const RecipeViewStyle = styled.div`
  padding: 20px;
`;

export const RecipeStyle = styled.div`
  display: flex;
`;

export const SearchStyle = styled.div`
  padding: 20px;
`;

export const RecipeView = () => {
  return (
    <RecipeViewStyle>
      <SearchStyle>
        <Search />
      </SearchStyle>

      <RecipeStyle>
        <RecipeCard />
      </RecipeStyle>
    </RecipeViewStyle>
  );
};
