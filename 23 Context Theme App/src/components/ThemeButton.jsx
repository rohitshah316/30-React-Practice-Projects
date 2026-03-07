import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeButton = () => {

    const {toggleTheme,theme}=useContext(ThemeContext)
  return (
    <button onClick={toggleTheme}>{theme.toUpperCase()}</button>
  )
}

export default ThemeButton