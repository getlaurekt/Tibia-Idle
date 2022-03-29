import React from "react";
import tw from "tailwind-styled-components";
import worm from "../../../assets/gifs/worm.gif";
import demon from "../../../assets/gifs/demon.gif";
import poetry from "../../../assets/gifs/poetry.png";
import training from "../../../assets/gifs/training.gif";
import npc from "../../../assets/gifs/npc.gif";
import shops from "../../../assets/gifs/shops.png";
import market from "../../../assets/gifs/tibia coin.gif";

const Menu = () => {
  return (
    <Container>
      <MenuList>
        <MenuItem>Statistics</MenuItem>
        <MenuItem>
          <Icon src={npc} />
          Character
        </MenuItem>
        <MenuItem>
          <Icon src={worm} />
          Battle
        </MenuItem>
        <MenuItem>
          <Icon src={demon} />
          Bosses
        </MenuItem>
        <MenuItem>
          <Icon src={training} />
          Training
        </MenuItem>
        <MenuItem>
          <Icon src={shops} />
          Shops
        </MenuItem>
        <MenuItem>
          <Icon src={poetry} />
          Quests
        </MenuItem>
        <MenuItem>
          <Icon src={market} />
          Market
        </MenuItem>
      </MenuList>
    </Container>
  );
};

export default Menu;

const Container = tw.nav`
    sidebar-padding
`;

const MenuList = tw.ul`
    space-y-3
`;

/* const MenuList = tw.ul`
    space-y-3
    overflow-y-scroll
    overscroll-contain
    snap-mandatory
    snap-y
`; */

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
    cursor-pointer
`;

/* scroll - my - 2;
snap - always;
snap - start; */

const Icon = tw.img`
    w-[16px]
    h-[16px]
    mr-1
`;
