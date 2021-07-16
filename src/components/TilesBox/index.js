import React from "react"
import "./index.css"
import Tile from "../Tile"

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
