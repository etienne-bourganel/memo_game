import React from "react"
import "./Tile.css"
import selectCorrectImg from "../../modules/selectCorrectImg"
import { sun } from "../../modules/selectCorrectImg"

const Tile = ({ tile }) => {
  const [showedImg, setShowedImg] = React.useState(sun)

  const handleClick = () => {
    setShowedImg(selectCorrectImg(showedImg === sun ? tile.name : sun))
  }

  return (
    <div className='Tile' onClick={handleClick}>
      <img className='tileImage' src={showedImg} alt={tile.name}></img>
    </div>
  )
}

export default Tile
