import React from "react"
import "./TilesBox.css"
import Tile from "../Tile/Tile"

const TilesBox = ({ tileArray }) => {
  const uniqueKey = (index, tileInfo) => {
    return index + `-${tileInfo.id}`
  }

  const [activeTiles, setActiveTiles] = React.useState([])
  const [correctTilesNames, setCorrectTilesNames] = React.useState([])

  const pushTile = (tile) => {
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

  const compareTiles = () => {
    return activeTiles[0].name === activeTiles[1].name
      ? setCorrectTilesNames([...correctTilesNames, activeTiles[1].name])
      : false
  }

  const showImage = (tileInfoObj) => {
    return correctTilesNames.includes(tileInfoObj.name) ||
      (!!activeTiles[0] && tileInfoObj.key === activeTiles[0].key) ||
      (!!activeTiles[1] && tileInfoObj.key === activeTiles[1].key)
      ? true
      : false
  }

  return (
    <div className='TilesBox'>
      {tileArray.map((tileInfo, index) => (
        <Tile
          key={uniqueKey(index, tileInfo)}
          tileKey={uniqueKey(index, tileInfo)}
          tileInfo={tileInfo}
          pushTile={pushTile}
          showImage={showImage}
        />
      ))}
    </div>
  )
}

export default TilesBox
