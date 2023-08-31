import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className='footerSection'>
            <h1>Shortly</h1>
            <ul>
                <li className='listLabels'>Features</li>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
            <ul>
                <li className='listLabels'>Resources</li>
                <li>Blogs</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
            <ul>
                <li className='listLabels'>Company</li>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
            <ul className='socialsList'>
                <img src='../src/assets/icon-facebook.svg'/>
                <img src='../src/assets/icon-twitter.svg'/>
                <img src='../src/assets/icon-pinterest.svg'/>
                <img src='../src/assets/icon-instagram.svg'/>
            </ul>

        </section>
  )
}

export default Footer;
