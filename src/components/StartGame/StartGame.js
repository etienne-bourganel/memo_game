import React from "react"
import "./StartGame.css"
import clsx from "clsx"

const StartGame = ({ createNewTileBox, gameStarted, victory, theme, children }) => {
  const handleClick = () => {
    createNewTileBox(theme)
    gameStarted(true)
  }

  return (
    <div
      className={clsx("StartGame", { Victory: !!victory })}
      onClick={handleClick}
      children={children}></div>
  )
}

export default StartGame
