import React, { useState } from "react";
import styled from "styled-components";
import { Search } from "semantic-ui-react";
import Cupboard from "../Cupboard";
import { Nav } from "../components/Nav/Nav";
import { RecipeView } from "../components/RecipeView/RecipeView";
import { recipes } from "../components/RecipeCard/mockData";

const Wrapper = styled.div``;

const Card = styled.div``;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const CupboardStyle = styled(Card)`
  padding: 20px;
  display: flex;
  flex-grow: 1;
  max-width: 300px;
  background-color: #fff9f2;
  height: 100vh;
`;

const RecipeFeed = styled(Card)`
  display: flex;
  flex-grow: 3;
  max-height: 250px;
`;

const MainContainer = () => {
  const [cupboardItems, setCupboardItems] = useState([
    "Flour",
    "Sugar",
    "Soya sauce"
  ]);

  const [searchResults, setSearchResults] = useState();

  const addCupboardItem = item => {
    setCupboardItems([...cupboardItems, item]);
  };
  const removeCupboardItem = item => {
    setCupboardItems(cupboardItems.filter(u => u !== item));
  };

  const onExecuteSearch = () => {
    // cupboardItems
    setSearchResults();
  };

  const onRemoveSearchItems = () => {
    // cupboardItems
    setSearchResults();
  };

  return (
    <Wrapper>
      <Nav />
      <Layout>
        <CupboardStyle>
          <Cupboard
            values={cupboardItems}
            onAdd={addCupboardItem}
            onRemove={removeCupboardItem}
          />
        </CupboardStyle>
        <RecipeFeed>
          <RecipeView
            recipes={recipes.recipes}
            onTagAdd={onExecuteSearch}
            onRemove={onRemoveSearchItems}
            onExecuteSearch={onExecuteSearch}
            searchResults={searchResults}
          />
        </RecipeFeed>
      </Layout>
    </Wrapper>
  );
};

export default MainContainer;
