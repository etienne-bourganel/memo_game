import React from "react"
import "./Tile.css"

import { sun } from "../../modules/selectCorrectImg"
import selectCorrectImg from "../../modules/selectCorrectImg"

const Tile = ({
  tileKey,
  tileInfo,
  manageSelection,
  activeKeys,
  pushTile,
  guessedNames,
}) => {
  const [imgToShow, setImgToShow] = React.useState(sun)

  const handleClick = () => {
    console.log(tileInfo)
    manageSelection(tileInfo.name, tileKey)
    pushTile({ Name: tileInfo.name, Key: tileKey })
  }

  React.useEffect(() => {
    if (
      tileKey === activeKeys[0] ||
      tileKey === activeKeys[1] ||
      guessedNames.includes(tileInfo.name)
    ) {
      setImgToShow(selectCorrectImg(tileInfo.name))
    } else setImgToShow(sun)
  }, [tileKey, activeKeys, tileInfo.name, guessedNames])

  return (
    <div className='Tile' onClick={handleClick}>
      <img className='tileImage' src={imgToShow} alt={tileInfo.name}></img>
    </div>
  )
}

export default Tile
