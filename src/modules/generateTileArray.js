const generateTileArray = (numberOfTiles) => {
  let tileArray = [];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  let numberOfCharacters = 15;

  for (let i = 0; tileArray.length < numberOfTiles; i++) {
    const randomNumber = Math.floor(Math.random() * numberOfCharacters);
    if (!tileArray.includes(randomNumber)) {
      tileArray.push(randomNumber);
      tileArray.push(randomNumber);
    } else continue;
  }

  return shuffleArray(tileArray);
};

export default generateTileArray;
