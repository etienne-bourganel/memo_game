import React from "react"
import "./index.css"
import backside from "../../data/back_images/sun.jpg"

const Tile = ({ tile }) => {
  const handleMouseEnter = () => {
    console.log(tile)
  }

  return (
    <div className='Tile' onMouseEnter={handleMouseEnter}>
      <img className='tileImage' src={backside} alt='backside'></img>
    </div>
  )
}

export default Tile
