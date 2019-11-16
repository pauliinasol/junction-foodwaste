import React from 'react';
import styled from "styled-components";
import { Search } from "semantic-ui-react";
import Cupboard from '../Cupboard'

const Wrapper = styled.div`

`;

const Card = styled.div`
  border-radius: 10px;
  padding: 50px;
  margin: 20px;
  background-color: #f86700;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const SearchStyle = styled(Card)`
  display: flex;
  justify-content: flex-end;
`;

const RecipeFeed = styled.div`
  width: 600px;
`;

const MainContainer = () => {
    return (
      <Wrapper>
        <SearchStyle>
            <Search></Search>
        </SearchStyle>
        <Layout>
            <Card>
              <Cupboard />
            </Card>
            <Card>
            <RecipeFeed>This is the list of recipes</RecipeFeed>
            </Card>
        </Layout>
      </Wrapper>
    );
  };

export default MainContainer;