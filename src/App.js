import React, { useState } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import StartGame from "./components/StartGame/StartGame"
import TilesBox from "./components/TilesBox/TilesBox"
import generateTileArray from "./modules/generateTileArray"

const App = () => {
  const [tileArray, setTileArray] = useState([])

  const numberOfTiles = 16

  const createNewTileBox = () => {
    const cardsArray = generateTileArray(numberOfTiles)
    setTileArray(cardsArray)
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
