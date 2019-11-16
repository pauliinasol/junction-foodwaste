import React from "react";
import { Card, Image } from "semantic-ui-react";

export const RecipeCard = () => (
  <Card>
    <Image
      src="https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg"
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>Bolognese</Card.Header>
      <Card.Meta>
        <span className="date">Includes mear</span>
      </Card.Meta>
      <Card.Description>
        This is a delicious bolognese pasta for winter nights.
      </Card.Description>
    </Card.Content>
  </Card>
);
