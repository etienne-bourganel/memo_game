import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StartGame from "./components/StartGame";
import TilesBox from "./components/TilesBox";
import generateTileArray from "./modules/generateTileArray";

const App = () => {
  const [tileArray, setTileArray] = useState([]);

  const numberOfTiles = 16;

  const createNewTileBox = () => {
    setTileArray(generateTileArray(numberOfTiles));
    console.log(tileArray);
  };

  return (
    <div>
      <Header />
      <StartGame createNewTileBox={createNewTileBox} />
      <TilesBox tileArray={tileArray} />
    </div>
  );
};

export default App;
