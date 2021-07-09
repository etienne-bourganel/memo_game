import React from "react"
import "./index.css"
import Tile from "../Tile"

const TilesBox = ({ tileArray }) => {
  return (
    <div className='TilesBox'>
      {tileArray.map((tile) => (
        <Tile tile={tile} />
      ))}
    </div>
  )
}

export default TilesBox
