const generateTileArray = (numberOfTiles) => {
  let tileArray = []

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  for (let i = 1; i <= numberOfTiles; i++) {
    tileArray.push(i)
    tileArray.push(i)
  }

  return shuffleArray(tileArray)
}

export default generateTileArray
