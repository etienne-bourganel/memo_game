import React from "react"
import "./Tile.css"
import { sun } from "../../modules/selectCorrectImg"
import selectCorrectImg from "../../modules/selectCorrectImg"
import clsx from "clsx"

const Tile = ({
  tileKey,
  tileInfo,
  pushTile,
  showImage,
  activeTheme,
  gameOngoing,
}) => {
  const [imgToShow, setImgToShow] = React.useState(sun)

  const handleClick = () => {
    pushTile({ name: tileInfo.name, key: tileKey })
  }

  React.useEffect(
    () =>
      showImage({ name: tileInfo.name, key: tileKey })
        ? setImgToShow(selectCorrectImg(tileInfo.name))
        : setImgToShow(sun),
    [showImage, tileInfo.name, tileKey]
  )

  return (
    <div className="Tile" onClick={handleClick}>
      <img
        className={clsx("tileImage", {
          tileWithBorder: imgToShow === sun || activeTheme.name === "Zoo",
        })}
        src={imgToShow}
        alt={tileInfo.name}></img>
    </div>
  )
}

export default Tile
