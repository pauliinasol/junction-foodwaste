import React from "react";
import { Card, Image } from "semantic-ui-react";

export const RecipeCard = ({recipe}) => (
  <Card>
    <Image
      src={recipe.img}
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>{recipe.heading}</Card.Header>
      <Card.Meta>
        <span className="date">Includes mear</span>
      </Card.Meta>
      <Card.Description>
        {recipe.instructions}
      </Card.Description>
    </Card.Content>
  </Card>
);
