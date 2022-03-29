import React from "react";
import tw from "tailwind-styled-components";

const Header = () => {
  return (
    <Container>
      <Name>Tibia Idle</Name>
      <Version>v0.0.1</Version>
    </Container>
  );
};

export default Header;

const Container = tw.div`
  flex
  flex-col
  justify-center
  content-center
  sidebar-padding
  w-full
  text-center
`;

const Name = tw.span`
  font-primary
  text-2xl
  text-primary
  tracking-widest
`;

const Version = tw.span`
  font-secondary
  text-sm
  text-secondary
`;
