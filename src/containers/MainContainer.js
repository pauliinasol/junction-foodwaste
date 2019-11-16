import React from "react";
import styled from "styled-components";
import { Search } from "semantic-ui-react";
import { Nav } from "../components/Nav/Nav";
import { RecipeView } from "../components/RecipeView/RecipeView";

const Wrapper = styled.div``;

const Card = styled.div`
  /* border-radius: 10px; */
  /* padding: 50px;
  margin: 20px; */
  /* background-color: #f86700; */
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* justify-content: space-between; */
`;

// const SearchStyle = styled(Card)`
//   display: flex;
//   justify-content: flex-end;
// `;

const Cupboard = styled(Card)`
  display: flex;
  flex-grow: 1;
  max-width: 300px;
  background-color: #fff9f2;
  height: 100vh;
`;
const RecipeFeed = styled(Card)`
  display: flex;
  flex-grow: 3;
`;

const MainContainer = () => {
  return (
    <Wrapper>
      <Nav />
      <Layout>
        <Cupboard>This is what you currently have in your cupboard</Cupboard>
        <RecipeFeed>
          <RecipeView />
        </RecipeFeed>
      </Layout>
    </Wrapper>
  );
};

export default MainContainer;
