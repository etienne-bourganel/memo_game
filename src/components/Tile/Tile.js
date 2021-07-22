import React from "react"
import "./Tile.css"

import { sun } from "../../modules/selectCorrectImg"
import selectCorrectImg from "../../modules/selectCorrectImg"

const Tile = ({ tileKey, tileInfo, pushTile, showImage }) => {
  const [imgToShow, setImgToShow] = React.useState(sun)

  const handleClick = () => {
    pushTile({ name: tileInfo.name, key: tileKey })
  }

  React.useEffect(
    () =>
      showImage({ name: tileInfo.name, key: tileKey })
        ? setImgToShow(selectCorrectImg(tileInfo.name))
        : setImgToShow(sun),
    [showImage, tileInfo.name, tileKey]
  )

  return (
    <div className='Tile' onClick={handleClick}>
      <img className='tileImage' src={imgToShow} alt={tileInfo.name}></img>
    </div>
  )
}

export default Tile
