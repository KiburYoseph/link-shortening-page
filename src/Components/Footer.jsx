import React from 'react'
import './Footer.css'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'
import instagram from '../assets/icon-instagram.svg'

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
                <img src={facebook}/>
                <img src={twitter}/>
                <img src={pinterest}/>
                <img src={instagram}/>
            </ul>

        </section>
  )
}

export default Footer;
