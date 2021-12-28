import React from "react"
import "./ThemeButton.css"
import clsx from "clsx"
import lion from "../../data/images/zoo_animals/lion.png"
import peppa from "../../data/images/peppapig_images/peppa.png"

const ThemeButton = ({
  handleThemeChoice,
  theme,
  active,
  restart,
}) => {
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
        { standard: theme.name === "Zoo" }
      )}>
      <img
        className={clsx("tileImage", { tileWithBorder: theme.name === "Zoo" })}
        src={theme.name === "Zoo" ? lion : peppa}
        alt={""}></img>
    </div>
  )
}

export default ThemeButton
