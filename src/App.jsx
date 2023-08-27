import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import './App.css'

const App = () => {
  return (
    <main className='padded'>
      <Navbar/>
      <Hero/>
    </main>
  )
}

export default App
