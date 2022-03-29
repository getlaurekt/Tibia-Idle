import React from "react";
import tw from "tailwind-styled-components";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <Game>
      <Sidebar />
    </Game>
  );
};

export default App;

const Game = tw.div`
  w-screen
  h-screen
  bg-primary
`;
