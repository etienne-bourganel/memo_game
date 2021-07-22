import React, { useEffect } from "react"
import "./TilesBox.css"
import Tile from "../Tile/Tile"

const TilesBox = ({ tileArray }) => {
  const uniqueKey = (index, tileInfo) => {
    return index + `-${tileInfo.id}`
  }

  const [tile1Name, setTile1Name] = React.useState("")
  const [tile1Key, setTile1Key] = React.useState("")

  const [tile2Name, setTile2Name] = React.useState("")
  const [tile2Key, setTile2Key] = React.useState("")

  const updateSelection = (tileName, tileKey) => {
    if (!tile1Name) {
      setTile1Name(tileName)
      setTile1Key(tileKey)
    } else if (!tile2Name) {
      setTile2Name(tileName)
      setTile2Key(tileKey)
    } else {
      resetSelection()
    }
  }

  const [activeTiles, setActiveTiles] = React.useState([])

  const pushTile = (tile) => {
    if (activeTiles.length < 2) {
      setActiveTiles([...activeTiles, tile])
    } else if (activeTiles.length === 2) {
      compareTiles()
      setActiveTiles([])
    }
  }

  const [correctTilesNames, setCorrectTilesNames] = React.useState([])

  const compareTiles = () => {
    const activeTile1Name = activeTiles[0].Name
    const activeTile2Name = activeTiles[1].Name

    if (activeTile1Name === activeTile2Name)
      setCorrectTilesNames([...correctTilesNames, activeTile1Name])
  }

  const resetSelection = () => {
    setTile1Name("")
    setTile1Key("")
    setTile2Name("")
    setTile2Key("")
  }

  const manageSelection = (tileName, tileKey) => {
    updateSelection(tileName, tileKey)
  }

  React.useEffect(() => {
    console.log(
      "\t tile1: " + tile1Name + " - " + tile1Key,
      "\n\t tile2: " + tile2Name + " - " + tile2Key
    )
    console.log("Active tiles: " + JSON.stringify(activeTiles))
    console.log("Correct keys: " + JSON.stringify(correctTilesNames))
  })

  return (
    <div className='TilesBox'>
      {tileArray.map((tileInfo, index) => (
        <Tile
          key={uniqueKey(index, tileInfo)}
          tileKey={uniqueKey(index, tileInfo)}
          tileInfo={tileInfo}
          manageSelection={manageSelection}
          activeKeys={[tile1Key, tile2Key]}
          pushTile={pushTile}
          guessedNames={correctTilesNames}
        />
      ))}
    </div>
  )
}

export default TilesBox
