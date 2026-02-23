import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

import Footer from './components/Footer'
import './App.css'
import Skills from './components/Skills'

const App = () => {
  return (
    <>
  
    <Header title="Rohit Shah"/>
    <Hero heading="I am a React Developer."/>
    <Skills/>
    <Footer footerText="Rohit Shah"/>
    </>
  )
}

export default App