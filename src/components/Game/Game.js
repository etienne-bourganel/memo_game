import React, { useState } from 'react'
import StartGame from '../StartGame/StartGame'
import Victory from '../Victory/Victory'
import TilesBox from '../TilesBox/TilesBox'
import generateTileArray from '../../modules/generateTileArray'
import VictoryConfetti from '../VictoryConfetti/VictoryConfetti'
import './Game.css'

const Game = () => {
  const numberOfTiles = 16
  const [tileArray, setTileArray] = useState([])
  const [correctTilesNames, setCorrectTilesNames] = useState([])
  const [activeTiles, setActiveTiles] = useState([])
  const [victory, setVictory] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

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

  const createNewTileBox = () => {
    const cardsArray = generateTileArray(numberOfTiles)
    setTileArray(cardsArray)
    setCorrectTilesNames([])
    setActiveTiles([])
    setVictory(false)
  }

  React.useEffect(() => {
    checkVictory()
  })

  return (
    <div className='mainContainer'>
      <div className='subContainer'>
        <TilesBox
          tileArray={tileArray}
          pushTileAbove={pushTile}
          showImage={showImage}
        />

        <div className='subMenu'>
          <StartGame
            createNewTileBox={createNewTileBox}
            gameStarted={setGameStarted}
            children={!gameStarted ? 'Start!' : 'Restart'}
          />

          {victory && (
            <>
              <Victory />
              <VictoryConfetti />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Game
