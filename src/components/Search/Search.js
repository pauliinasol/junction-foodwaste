import React from "react";
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

export const SearchTag = () => {
  return (
    <Label as="a" tag>
      Cream
    </Label>
  );
};

export const Search = () => {
  return (
    <SearchContainer>
      <SearchRow>
        <InputStyle>
          <Input />
        </InputStyle>

        <Button>+</Button>
        <Button>Search</Button>
      </SearchRow>
      <SearchRow>
        <SearchTag />
      </SearchRow>
    </SearchContainer>
  );
};
