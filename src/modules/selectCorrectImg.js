import cat from "../data/images/peppapig_images/cat.png"
import daddy from "../data/images/peppapig_images/daddy.png"
import danny from "../data/images/peppapig_images/danny.png"
import emily from "../data/images/peppapig_images/emily.png"
import freddy from "../data/images/peppapig_images/freddy.png"
import george from "../data/images/peppapig_images/george.png"
import gerald from "../data/images/peppapig_images/gerald.png"
import grampy from "../data/images/peppapig_images/grampy.png"
import grandpa from "../data/images/peppapig_images/grandpa.png"
import granny from "../data/images/peppapig_images/granny.png"
import mummy from "../data/images/peppapig_images/mummy.png"
import peppa from "../data/images/peppapig_images/peppa.png"
import potato from "../data/images/peppapig_images/potato.png"
import rabbit from "../data/images/peppapig_images/rabbit.png"
import suzie from "../data/images/peppapig_images/suzie.png"

import sun from "../data/images/back_images/sun2.png"

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
export { sun }
