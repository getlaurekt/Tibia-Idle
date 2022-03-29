import React from "react";
import tw from "tailwind-styled-components";

const Menu = () => {
  return (
    <Container>
      <MenuList>
        <MenuItem>Statistics</MenuItem>
        <MenuItem>Character</MenuItem>
        <MenuItem>Battle</MenuItem>
      </MenuList>
    </Container>
  );
};

export default Menu;

const Container = tw.nav`
    sidebar-padding
`;

const MenuList = tw.ul`
`;

const MenuItem = tw.li`
    text-center
    text-secondary
    font-primary
    hover:text-primary
    bg-gray-600
    hover:bg-gray-500
    rounded-lg
    my-3
    p-1
    cursor-pointer
`;
