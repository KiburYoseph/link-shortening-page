import { useState, useEffect } from 'react'
import React from 'react'
import './LinkForm.css'


const LinkForm = () => {
    localStorage.setItem("ITEMS", [])
    const [userLink, setUserLink] = useState('');
    const [linkList, setLinkList] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if(localValue == null || localValue == "") return []
        console.log(localValue)
        return JSON.parse(localValue)
    });
    const [error, setError] = useState(false)


    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(linkList))
      }, [linkList])
    

    const addList = () => {

        if(error == true) {
            console.log("There was an error")
            return null
        }

        else {
            setLinkList(currentList => {
                return [...currentList, {
                     longLink: userLink,
                     shortLink: recievedLink,
                     id: crypto.randomUUID()
                 }]
             })
        }
    }

    const shorten = () => {
            setError(false)
            fetch(`https://api.shrtco.de/v2/shorten?url=${userLink}`)
            .then(data => {
            if (!data.ok) {
            throw Error('Request failed');
            }
            return data.json();
            })
            .then(item => {
                if(error == true) {
                    console.log("There was an error")
                    return null
                }
        
                else {
                    setLinkList(currentList => {
                        return [...currentList, {
                             longLink: userLink,
                             shortLink: item.result.full_short_link,
                             id: crypto.randomUUID()
                         }]
                     })
                }

            })
            .catch(error => {
                setError(true)
            })


    }

    return (
        <section className='linkForm'>
            <section className='formSection'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input className = {`error${error}`} type='text' value={userLink} placeholder='Shorten a link here...' onChange={(e) => setUserLink(e.target.value)}></input>
                        <button onClick={() => shorten()}>Shorten It!</button>
                </form>
                {error ? <p className='errorMessage'><em>Please enter a valid input</em></p> : null}
                </section>
                <section className='listSection'>
                <ul>
                    {linkList.map( list => {
                        return <li key={list.id}><p className='mainLink'>{list.longLink}</p><p className='shortenedLink'>{list.shortLink}</p><button>Copy</button></li>
                    })}   
                </ul>
            </section>
        </section>
    )
}

export default LinkForm
