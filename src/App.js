import React, { useState } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import StartGame from "./components/StartGame/StartGame"
import TilesBox from "./components/TilesBox/TilesBox"
import generateTileArray from "./modules/generateTileArray"

const App = () => {
  const numberOfTiles = 16
  const [tileArray, setTileArray] = useState([])
  const [correctTilesNames, setCorrectTilesNames] = React.useState([])
  const [activeTiles, setActiveTiles] = React.useState([])

  const pushTile = (tile) => {
    if (activeTiles.length < 2) {
      if (activeTiles.length === 1 && tile.key === activeTiles[0].key) {
        return
      } else {
        setActiveTiles([...activeTiles, tile])
      }
    } else if (activeTiles.length === 2) {
      compareTiles()
      setActiveTiles([tile])
    }
  }

  const compareTiles = () => {
    return activeTiles[0].name === activeTiles[1].name
      ? setCorrectTilesNames([...correctTilesNames, activeTiles[1].name])
      : false
  }

  const showImage = (tileInfoObj) => {
    return correctTilesNames.includes(tileInfoObj.name) ||
      (!!activeTiles[0] && tileInfoObj.key === activeTiles[0].key) ||
      (!!activeTiles[1] && tileInfoObj.key === activeTiles[1].key)
      ? true
      : false
  }

  const createNewTileBox = () => {
    const cardsArray = generateTileArray(numberOfTiles)
    setTileArray(cardsArray)
    setCorrectTilesNames([])
    setActiveTiles([])
  }

  return (
    <div>
      <Header />
      <StartGame createNewTileBox={createNewTileBox} />
      <TilesBox
        tileArray={tileArray}
        pushTileAbove={pushTile}
        showImage={showImage}
      />
    </div>
  )
}

export default App
