import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>

      <Footer/>
    </Router>
  )
}

export default App