import React from 'react'
import './ThemeChoice.css'
import ThemeButton from '../ThemeButton/ThemeButton'

const ThemeChoice = ({ handleThemeChoice, themesArray, activeTheme }) => {
  return (
    <div className='themeBar'>
      {themesArray.map((theme, index) => (
        <ThemeButton
          key={theme.name}
          handleThemeChoice={handleThemeChoice}
          children={theme.name}
          theme={themesArray[index]}
          active={activeTheme.name === theme.name}
        />
      ))}
    </div>
  )
}

export default ThemeChoice
