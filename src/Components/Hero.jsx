import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero padded'>
        <div className='heroText'>
            <h1>More than just shorter links</h1>
            <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <button>Get Started</button>
        </div>
        <img src='src/assets/illustration-working.svg'/>
    </section>
  )
}

export default Hero
