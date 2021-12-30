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
import fox from "../data/images/zoo_animals/fox.png"
import fox2 from "../data/images/zoo_animals/fox2.png"
import hedgehog from "../data/images/zoo_animals/hedgehog.png"
import koala from "../data/images/zoo_animals/koala.png"
import lemur from "../data/images/zoo_animals/lemur.png"
import lion from "../data/images/zoo_animals/lion.png"
import mouse from "../data/images/zoo_animals/mouse.png"
import owl from "../data/images/zoo_animals/owl.png"
import panda from "../data/images/zoo_animals/panda.png"
import pinguin from "../data/images/zoo_animals/pinguin.png"
import rabbit2 from "../data/images/zoo_animals/rabbit2.png"
import seal from "../data/images/zoo_animals/seal.png"
import snail from "../data/images/zoo_animals/snail.png"
import squirrel from "../data/images/zoo_animals/squirrel.png"
import tiger from "../data/images/zoo_animals/tiger.png"
import weirdbear from "../data/images/zoo_animals/weirdbear.png"
import buzz from "../data/images/disney/buzz.png"
import disneyrabbit from "../data/images/disney/disneyrabbit.png"
import donald from "../data/images/disney/donald.png"
import dora from "../data/images/disney/dora.png"
import dumbo from "../data/images/disney/dumbo.png"
import goofy from "../data/images/disney/goofy.jpg"
import kitten from "../data/images/disney/kitten.png"
import mickey from "../data/images/disney/mickey.png"
import nephews from "../data/images/disney/nephews.jpg"
import pluto from "../data/images/disney/pluto.png"
import roilion from "../data/images/disney/roilion.png"
import scrooge from "../data/images/disney/scrooge.png"
import turtle from "../data/images/disney/turtle.png"

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
    case "fox":
      return fox
    case "fox2":
      return fox2
    case "hedgehog":
      return hedgehog
    case "koala":
      return koala
    case "lemur":
      return lemur
    case "lion":
      return lion
    case "mouse":
      return mouse
    case "owl":
      return owl
    case "panda":
      return panda
    case "pinguin":
      return pinguin
    case "rabbit2":
      return rabbit2
    case "seal":
      return seal
    case "snail":
      return snail
    case "squirrel":
      return squirrel
    case "tiger":
      return tiger
    case "weirdbear":
      return weirdbear
    case "buzz":
      return buzz
    case "disneyrabbit":
      return disneyrabbit
    case "donald":
      return donald
    case "dora":
      return dora
    case "dumbo":
      return dumbo
    case "goofy":
      return goofy
    case "kitten":
      return kitten
    case "mickey":
      return mickey
    case "nephews":
      return nephews
    case "pluto":
      return pluto
    case "roilion":
      return roilion
    case "scrooge":
      return scrooge
    case "turtle":
      return turtle
    default:
      return sun
  }
}

export default selectCorrectImg
export { sun }
