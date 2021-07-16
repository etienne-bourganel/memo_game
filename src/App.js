import React, { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import StartGame from "./components/StartGame"
import TilesBox from "./components/TilesBox"
import generateTileArray from "./modules/generateTileArray"
const peppapigData = require("./data/peppapig.json")

const App = () => {
  const [tileArray, setTileArray] = useState([])

  const numberOfTiles = 16

  const createNewTileBox = () => {
    const cardsArray = generateTileArray(numberOfTiles)
    setTileArray(cardsArray)
    console.log(cardsArray)
  }

  return (
    <div>
      <Header />
      <StartGame createNewTileBox={createNewTileBox} />
      <TilesBox tileArray={tileArray} />
    </div>
  )
}

export default App
