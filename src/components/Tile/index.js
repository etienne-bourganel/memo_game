import React from "react"
import "./index.css"
import selectCorrectImg from "../../modules/selectCorrectImg"
import { sun } from "../../modules/peppapigImagesImports"

const Tile = ({ tile }) => {
  const [showedImg, setShowedImg] = React.useState(sun)

  const handleClick = () => {
    setShowedImg(selectCorrectImg(tile.name))
  }

  return (
    <div className='Tile' onClick={handleClick}>
      <img className='tileImage' src={showedImg} alt='backside'></img>
    </div>
  )
}

export default Tile
