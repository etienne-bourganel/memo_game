import React from "react"
import "./StartGame.css"

const StartGame = ({ createNewTileBox, gameStarted }) => {
  const handleClick = () => {
    createNewTileBox()
    gameStarted(true)
  }

  return (
    <div className='StartGame' onClick={handleClick}>
      Start!
    </div>
  )
}

export default StartGame
