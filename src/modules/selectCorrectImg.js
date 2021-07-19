import {
  cat,
  daddy,
  emily,
  george,
  danny,
  freddy,
  gerald,
  grampy,
  grandpa,
  granny,
  mummy,
  peppa,
  potato,
  rabbit,
  suzie,
  sun,
} from "./peppapigImagesImports"

const selectCorrectImg = (characterName) => {
  switch (characterName) {
    case "cat":
      return cat
    case "daddy":
      return daddy
    case "emily":
      return emily
    case "george":
      return george
    case "danny":
      return danny
    case "freddy":
      return freddy
    case "gerald":
      return gerald
    case "grampy":
      return grampy
    case "grandpa":
      return grandpa
    case "granny":
      return granny
    case "mummy":
      return mummy
    case "peppa":
      return peppa
    case "potato":
      return potato
    case "rabbit":
      return rabbit
    case "suzie":
      return suzie
    default:
      return sun
  }
}

export default selectCorrectImg
