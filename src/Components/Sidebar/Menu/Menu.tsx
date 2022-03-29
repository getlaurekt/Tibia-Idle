import React from "react";
import tw from "tailwind-styled-components";
import worm from "../../../assets/gifs/worm.gif";

const Menu = () => {
  return (
    <Container>
      <MenuList>
        <MenuItem>Statistics</MenuItem>
        <MenuItem>Character</MenuItem>
        <MenuItem>
          <Icon src={worm} />
          Battle
        </MenuItem>
        <MenuItem>Bosses</MenuItem>
        <MenuItem>Shops</MenuItem>
        <MenuItem>Quests</MenuItem>
        <MenuItem>Market</MenuItem>
        <MenuItem>Statistics</MenuItem>
        <MenuItem>Character</MenuItem>
        <MenuItem>Battle</MenuItem>
        <MenuItem>Bosses</MenuItem>
        <MenuItem>Shops</MenuItem>
        <MenuItem>Quests</MenuItem>
        <MenuItem>Market</MenuItem>
      </MenuList>
    </Container>
  );
};

export default Menu;

const Container = tw.nav`
    sidebar-padding
`;

const MenuList = tw.ul`
    h-64
    space-y-3
    overflow-y-scroll
    overscroll-contain
    snap-mandatory
    snap-y
`;

const MenuItem = tw.li`
    flex
    flex-row
    items-center
    justify-center
    text-secondary
    font-primary
    bg-gray-600
    rounded-lg
    p-1
    transition-colors
    duration-300
    ease-in-out
    hover:text-primary
    hover:bg-gray-500
    scroll-my-2
    snap-always
    snap-start
    cursor-pointer
`;

const Icon = tw.img`
    w-[16px]
    h-[16px]
    mr-1
`;
