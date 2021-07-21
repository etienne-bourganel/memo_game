import React from "react"
import "./Tile.css"

import { sun } from "../../modules/selectCorrectImg"

const Tile = ({ tileKey, tileInfo, manageSelection, selection }) => {
  const handleClick = () => {
    console.log(tileInfo)
    manageSelection(tileInfo.name, tileKey)
    console.log(
      "tile1: " + selection.tile1Name + " - " + selection.tile1Key,
      "\n",
      "tile2: " + selection.tile2Name + " - " + selection.tile2Key
    )
  }

  return (
    <div className='Tile' onClick={handleClick}>
      <img className='tileImage' src={sun} alt={tileInfo.name}></img>
    </div>
  )
}

export default Tile
