import React from "react"
import "./ThemeChoice.css"
import ThemeButton from "../ThemeButton/ThemeButton"

const ThemeChoice = ({
  handleThemeChoice,
  themesArray,
  activeTheme,
  restart,
}) => {
  return (
    <div className="themeBar">
      {themesArray.map((theme, index) => (
        <ThemeButton
          key={theme.name}
          handleThemeChoice={handleThemeChoice}
          theme={themesArray[index]}
          active={activeTheme.name === theme.name}
          restart={restart}
        />
      ))}
    </div>
  )
}

export default ThemeChoice
