import React from "react"
import "./Tile.css"
import selectCorrectImg from "../../modules/selectCorrectImg"
import { sun } from "../../modules/selectCorrectImg"

const Tile = ({ tileUniqueKey, tile, updatePair }) => {
  const [showedImg, setShowedImg] = React.useState(sun)

  // const handleClick = () => {
  //   setShowedImg(selectCorrectImg(showedImg === sun ? tile.name : sun))
  // }

  const tileInfo = () => {
    return [tile.name, tileUniqueKey]
  }

  const handleClick = () => {
    updatePair(tileInfo())
  }

  return (
    <div className='Tile' onClick={handleClick}>
      <img className='tileImage' src={showedImg} alt={tile.name}></img>
    </div>
  )
}

export default Tile
