import React from "react"
import "./TilesBox.css"
import Tile from "../Tile/Tile"

const TilesBox = ({ tileArray, pushTileAbove, showImage }) => {
  const uniqueKey = (index, tileInfo) => {
    return index + `-${tileInfo.id}`
  }

  const pushTile = (tile) => {
    pushTileAbove(tile)
  }

  return (
    <div className='TilesBox'>
      {tileArray.map((tileInfo, index) => (
        <Tile
          key={uniqueKey(index, tileInfo)}
          tileKey={uniqueKey(index, tileInfo)}
          tileInfo={tileInfo}
          pushTile={pushTile}
          showImage={showImage}
        />
      ))}
    </div>
  )
}

export default TilesBox
