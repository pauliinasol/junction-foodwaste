import React from "react";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";

export const RecipeCard = ({ recipe }) => {
  return (
    <>
      <Card>
        <img src={recipe.img} height="200px" width="290px" alt={"recipe"} />
        <Card.Content>
          <Card.Header>{recipe.heading}</Card.Header>
          {/* <Card.Meta>
            <span className="date">Includes mear</span>
          </Card.Meta> */}
          <Card.Description>{recipe.instructions}</Card.Description>
        </Card.Content>
      </Card>
    </>
  );
};
