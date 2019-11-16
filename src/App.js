import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Search } from "semantic-ui-react";

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

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <SearchStyle>
        <Search></Search>
      </SearchStyle>
      <Layout>
        <Card>This is what you currently have in your cupboard</Card>
        <Card>
          <RecipeFeed>This is the list of recipes</RecipeFeed>
        </Card>
      </Layout>
      {/* </header> */}
    </div>
  );
}

export default App;
