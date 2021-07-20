import React from "react"
import "./TilesBox.css"
import Tile from "../Tile/Tile"

const TilesBox = ({ tileArray }) => {
  let tile1 = []
  let tile2 = []
  let selectedPair = []

  const displayPair = () => {
    console.log("selected pair: " + selectedPair)
  }

  const updatePair = (tileInfo) => {
    console.log(tileInfo)
    if (!tile1[0]) {
      tile1 = tileInfo
      selectedPair = [tile1, tile2]
      displayPair()

      return
    } else if (!tile2[0]) {
      tile2 = tileInfo
      selectedPair = [tile1, tile2]
      displayPair()

      return
    } else {
      tile1 = []
      tile2 = []
      selectedPair = [tile1, tile2]
      displayPair()
    }
  }

  return (
    <div className='TilesBox'>
      {tileArray.map((tile, index) => (
        <Tile
          key={index + `-${tile.id}`}
          tileUniqueKey={index + `-${tile.id}`}
          tile={tile}
          updatePair={updatePair}
        />
      ))}
    </div>
  )
}

export default TilesBox
