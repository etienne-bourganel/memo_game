const peppapigData = require("../data/peppapig.json")
const zoo_animals = require("../data/zoo_animals.json")
const disney = require("../data/disney.json")

const generateTileArray = (numberOfTiles, theme) => {
  const allCardsArray =
    theme.name === "Peppa Pig"
      ? peppapigData.cards
      : theme.name === "Zoo"
      ? zoo_animals.cards
      : theme.name === "Disney"
      ? disney.cards
      : null

  let tileArray = []

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const numberOfCharacters = theme.nrOfCharacters

  for (let i = 0; tileArray.length < numberOfTiles; i++) {
    const randomNumber = Math.floor(Math.random() * numberOfCharacters)
    if (!tileArray.includes(randomNumber)) {
      tileArray.push(randomNumber)
      tileArray.push(randomNumber)
    } else continue
  }

  const shuffledArray = shuffleArray(tileArray)

  const card = (idNr) => {
    return allCardsArray.find((element) => element.id === idNr)
  }
  const cardsArray = shuffledArray.map((idNr) => card(idNr))

  return cardsArray
}

export default generateTileArray
