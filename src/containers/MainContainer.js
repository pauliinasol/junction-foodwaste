import React from "react";
import styled from "styled-components";
import { Search } from "semantic-ui-react";
import Cupboard from "../components/Cupboard/Cupboard";
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
  return (
    <Wrapper>
      <Nav />
      <Layout>
        <CupboardStyle>
          <Cupboard />
        </CupboardStyle>
        <RecipeFeed>
          <RecipeView recipes={recipes.recipes} />
        </RecipeFeed>
      </Layout>
    </Wrapper>
  );
};

export default MainContainer;
