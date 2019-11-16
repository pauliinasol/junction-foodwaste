import React from "react";
import { Menu, Image } from "semantic-ui-react";
import src from "./kruoka.png";

export const Nav = () => {
  return (
    <Menu
      secondary
      style={{
        paddingTop: "10px",
        paddingBottom: "10px",
        boxShadow: "5px 5px #FFF9F2",
        zIndex: "1",
        margin: "0px"
      }}
    >
      <Menu.Item header>
        <Image src={src} size="small" />
      </Menu.Item>
      <Menu.Item></Menu.Item>
    </Menu>
  );
};
