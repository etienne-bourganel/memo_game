import React from 'react'
import './ThemeButton.css'

const ThemeButton = ({ handleThemeChoice, children, theme, active }) => {
  const handleClick = (theme) => {
    handleThemeChoice(theme)
  }

  return (
    <div
      onClick={() => handleClick(theme)}
      className={`themeButton  ${active ? 'active' : null}`}
    >
      {children}
    </div>
  )
}

export default ThemeButton
