import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import LinkForm from './Components/LinkForm'
import AdvancedStats from './Components/AdvancedStats'
import CTA from './Components/CTA'
import Footer from './Components/Footer'
import './App.css'



const App = () => {
  return (
    <main className='all'>
      <Navbar/>
      <Hero/>
      <section className='greyBG'>
        <LinkForm/>
        <AdvancedStats/>
      </section>
      <CTA/>
      <Footer/>
    </main>
  )
}

export default App
