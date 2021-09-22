import React from "react"
import "./StartGame.css"

const StartGame = ({ createNewTileBox, gameStarted, children }) => {
  const handleClick = () => {
    createNewTileBox()
    gameStarted(true)
  }

  return (
    <div className='StartGame' onClick={handleClick} children={children}></div>
  )
}

export default StartGame
