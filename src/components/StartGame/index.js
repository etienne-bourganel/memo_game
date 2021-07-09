import React from "react"
import "./index.css"

const StartGame = ({ createNewTileBox }) => {
  const handleClick = () => {
    createNewTileBox()
  }

  return (
    <div className='StartGame' onClick={handleClick}>
      Start Game
    </div>
  )
}

export default StartGame
