import { useState } from 'react'
import React from 'react'
import './LinkForm.css'


const LinkForm = () => {

    const [userLink, setUserLink] = useState('')


    return (
        <section className='linkForm'>
            <section className='formSection'>
                <form>
                    <input type='url' value={userLink} placeholder='Shorten a link here...' onChange={(e) => setUserLink(e.target.value)}></input>
                        <button>Shorten It!</button>
                </form>
                </section>
                <section className='listSection'>
                <ul>
                    <li><p className='mainLink'>https://frontendmentorio</p><p className='shortenedLink'>https://rel.ink/k4lKyk</p><button>Copy</button></li>
                    <li><p className='mainLink'>https://frontendmentorio</p><p className='shortenedLink'>https://rel.ink/k4lKyk</p><button>Copy</button></li>
                    <li><p className='mainLink'>https://frontendmentorio</p><p className='shortenedLink'>https://rel.ink/k4lKyk</p><button>Copy</button></li>
                        
                </ul>
            </section>
        </section>
    )
}

export default LinkForm
