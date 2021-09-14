import React from "react"
import "./Restart.css"

const Restart = ({ createNewTileBox, gameStarted, victory }) => {
  const handleClick = () => {
    createNewTileBox()
    gameStarted(true)
  }

  let className = "Restart"
  if (victory) {
    className += " pulse"
  }

  return (
    <div className={className} onClick={handleClick}>
      Start over
    </div>
  )
}

export default Restart
