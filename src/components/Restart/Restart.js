import React from "react"
import "./Restart.css"

const Restart = ({ createNewTileBox, gameStarted }) => {
  const handleClick = () => {
    createNewTileBox()
    gameStarted(true)
  }

  return (
    <div className='Restart' onClick={handleClick}>
      Start over
    </div>
  )
}

export default Restart
