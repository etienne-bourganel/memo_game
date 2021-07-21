import React from "react"
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
    if (tileKey === tile1Key || tile2Key) return
    else if (!tile1Name) {
      setTile1Name(tileName)
      setTile1Key(tileKey)
    } else if (!tile2Name) {
      setTile2Name(tileName)
      setTile2Key(tileKey)
    } else {
      resetSelection()
    }
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

  return (
    <div className='TilesBox'>
      {tileArray.map((tileInfo, index) => (
        <Tile
          key={uniqueKey(index, tileInfo)}
          tileKey={uniqueKey(index, tileInfo)}
          tileInfo={tileInfo}
          manageSelection={manageSelection}
          selection={{
            tile1Name: tile1Name,
            tile1Key: tile1Key,
            tile2Name: tile2Name,
            tile2Key: tile2Key,
          }}
        />
      ))}
    </div>
  )
}

export default TilesBox
