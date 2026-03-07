import React, { useContext } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { ThemeContext } from './context/ThemeContext'

const App = () => {

  const {theme}=useContext(ThemeContext)
  return (
    <div className={theme}>
      <Header/>
      <Content/>
    </div>
  )
}

export default App