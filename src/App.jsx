import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import LinkForm from './Components/LinkForm'
import AdvancedStats from './Components/AdvancedStats'
import './App.css'



const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <section className='greyBG'>
        <LinkForm/>
        <AdvancedStats/>
      </section>
    </main>
  )
}

export default App
