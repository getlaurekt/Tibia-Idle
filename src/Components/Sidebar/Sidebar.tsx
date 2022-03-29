import React from "react";
import tw from "tailwind-styled-components";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";

const Sidebar = () => {
  return (
    <Container>
      <Header />
      <Menu />
    </Container>
  );
};

export default Sidebar;

const Container = tw.div`
    h-screen
    w-48
    bg-secondary
`;
