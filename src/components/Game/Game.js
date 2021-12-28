import React, { useState } from "react"
import StartGame from "../StartGame/StartGame"
import TilesBox from "../TilesBox/TilesBox"
import ThemeChoice from "../ThemeChoice/ThemeChoice"
import generateTileArray from "../../modules/generateTileArray"
import VictoryConfetti from "../VictoryConfetti/VictoryConfetti"
import { FaPlay } from "react-icons/fa"
import { FaUndo } from "react-icons/fa"
import "./Game.css"

const Game = () => {
  const numberOfTiles = 16
  const themesArray = [
    { name: "Peppa Pig", nrOfCharacters: 15 },
    { name: "Zoo", nrOfCharacters: 16 },
  ]

  const [tileArray, setTileArray] = useState([])
  const [correctTilesNames, setCorrectTilesNames] = useState([])
  const [activeTiles, setActiveTiles] = useState([])
  const [victory, setVictory] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [theme, setTheme] = useState(themesArray[0])

  const handleThemeChoice = (themeChoice) => {
    setTheme(themeChoice)
  }

  const pushTile = (tile) => {
    if (victory) return
    else {
      if (activeTiles.length < 2) {
        if (activeTiles.length === 1 && tile.key === activeTiles[0].key) {
          return
        } else {
          setActiveTiles([...activeTiles, tile])
        }
      } else if (activeTiles.length === 2) {
        compareTiles()
        setActiveTiles([tile])
      }
    }
  }

  const compareTiles = () => {
    return activeTiles[0].name === activeTiles[1].name
      ? setCorrectTilesNames([...correctTilesNames, activeTiles[1].name])
      : false
  }

  const checkVictory = () => {
    return correctTilesNames.length === 7 && activeTiles.length === 2
      ? setVictory(true)
      : false
  }

  const showImage = (tileInfoObj) => {
    return correctTilesNames.includes(tileInfoObj.name) ||
      (!!activeTiles[0] && tileInfoObj.key === activeTiles[0].key) ||
      (!!activeTiles[1] && tileInfoObj.key === activeTiles[1].key)
      ? true
      : false
  }

  const createNewTileBox = (theme) => {
    const cardsArray = generateTileArray(numberOfTiles, theme)
    setTileArray(cardsArray)
    setCorrectTilesNames([])
    setActiveTiles([])
    setVictory(false)
  }

  const restart = (theme) => {
    createNewTileBox(theme)
  }

  React.useEffect(() => {
    checkVictory()
  })

  return (
    <div className="mainContainer">
      <div className="subContainer">
        <div className="subMenu">
          <ThemeChoice
            handleThemeChoice={handleThemeChoice}
            themesArray={themesArray}
            activeTheme={theme}
            restart={restart}
          />
          <div>
            <StartGame
              createNewTileBox={createNewTileBox}
              gameStarted={setGameStarted}
              victory={victory}
              theme={theme}
              children={!gameStarted ? <FaPlay /> : <FaUndo />}
            />

            {victory && <VictoryConfetti />}
          </div>
        </div>
        <TilesBox
          tileArray={tileArray}
          pushTileAbove={pushTile}
          showImage={showImage}
          activeTheme={theme}
          gameStarted={gameStarted}
          gameOngoing={activeTiles.length}
        />
      </div>
    </div>
  )
}

export default Game
