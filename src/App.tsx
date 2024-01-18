import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Feature from './components/Features/Feature'

function App() {


  return (
    <>
     <Nav />
     <Hero />
     <Stats />
     <Feature />
    </>
  )
}

export default App
