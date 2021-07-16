import React from "react"
import "./index.css"

import {
  cat,
  daddy,
  emily,
  george,
  danny,
  freddy,
  gerald,
  grampy,
  grandpa,
  granny,
  mummy,
  peppa,
  potato,
  rabbit,
  suzie,
  sun,
} from "../../modules/peppapigImagesImports"

const Tile = ({ tile }) => {
  const [showedImg, setShowedImg] = React.useState(sun)

  const handleClick = () => {
    setShowedImg(tile.name)
    console.log(showedImg)
    console.log(tile)
  }

  return (
    <div className='Tile' onClick={handleClick}>
      <img className='tileImage' src={sun} alt='backside'></img>
    </div>
  )
}

export default Tile
