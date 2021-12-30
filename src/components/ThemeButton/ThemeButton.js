import React from "react"
import "./ThemeButton.css"
import clsx from "clsx"
import lion from "../../data/images/zoo_animals/lion.png"
import peppa from "../../data/images/peppapig_images/peppa.png"
import mickey from "../../data/images/disney/mickey.png"

const ThemeButton = ({ handleThemeChoice, theme, active, restart }) => {
  const handleClick = (theme) => {
    handleThemeChoice(theme)
    restart(theme)
  }

  return (
    <div
      onClick={() => handleClick(theme)}
      className={clsx(
        "themeButton",
        { active: active },
        { standard: theme.name === "Zoo" || theme.name === "Disney" }
      )}>
      <img
        className={clsx("themeImage", {
          tileWithBorder: theme.name === "Zoo" || theme.name === "Disney",
        })}
        src={
          theme.name === "Zoo" ? lion : theme.name === "Disney" ? mickey : peppa
        }
        alt={""}></img>
    </div>
  )
}

export default ThemeButton
