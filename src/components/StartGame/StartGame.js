import React from "react"
import "./StartGame.css"
import clsx from "clsx"

const StartGame = ({ createNewTileBox, gameStarted, victory, children }) => {
  const handleClick = () => {
    createNewTileBox()
    gameStarted(true)
  }

  return (
    <div className={clsx('StartGame', {'Victory': !!victory})} onClick={handleClick} children={children}></div>
  )
}

export default StartGame
