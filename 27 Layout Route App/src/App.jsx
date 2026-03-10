import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App