import React from 'react'
import './ThemeChoice.css'

const ThemeChoice = ({ handleThemeChoice, themesArray }) => {
  const handleClick = (themeChoice) => {
    handleThemeChoice(themeChoice)
  }

  return (
    <div className='themeBar'>
      {themesArray.map((theme, index) => (
        <div
          key={theme.name}
          className='themeButton'
          onClick={() => handleClick(themesArray[index])}
          children={theme.name}
        ></div>
      ))}
    </div>
  )
}

export default ThemeChoice
