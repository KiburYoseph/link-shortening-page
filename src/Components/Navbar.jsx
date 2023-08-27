import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <section className='navBar'>
        <img src='src/assets/logo.svg'></img>
        <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
        </ul>
        <div className='navbarBtns'>
            <button className='greyBtn'>Login</button>
            <button>Sign Up</button>
        </div>
    </section>
  )
}

export default Navbar
