import React from "react"
import "./TilesBox.css"
import Tile from "../Tile/Tile"

const TilesBox = ({ tileArray }) => {
  return (
    <div className='TilesBox'>
      {tileArray.map((tile, index) => (
        <Tile key={`${tile.id}` + index} tile={tile} />
      ))}
    </div>
  )
}

export default TilesBox
