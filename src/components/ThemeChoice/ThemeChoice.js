import React from 'react'
import './ThemeChoice.css'

const ThemeChoice = ({ handleThemeChoice }) => {
  const handleClick = (themeChoice) => {
    handleThemeChoice(themeChoice)
  }

  return (
    <div className='themeBar'>
      <div
        className='themeButton'
        onClick={() => handleClick('peppa')}
        children='Peppa'
      ></div>
      <div
        className='themeButton'
        onClick={() => handleClick('zoo')}
        children='Zoo'
      ></div>
    </div>
  )
}

export default ThemeChoice
