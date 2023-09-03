import { useState } from 'react'
import React from 'react'
import './Navbar.css'



const Navbar = () => {

  const [open, setOpen] = useState(false)


  return (
    <section className='navBar padded'>
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
          <button className='hamburgerBtn' onClick={() => setOpen(!open)}>
            <img src='src/assets/burger-menu-svgrepo-com.svg'/>
          </button>
          { open ? 
          
          <div className='openHamburger'>
                <ul>
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Resources</li>
                </ul>
              <hr />
              <button className='greyBtn login'>Login</button>
              <button>Sign Up</button>
          </div> 
          
          
          
          : null}
    </section>
  )
}

export default Navbar
