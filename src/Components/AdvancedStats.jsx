import React from 'react'
import './AdvancedStats.css'
import brandRecognition from '../assets/icon-brand-recognition.svg'
import detailedRecords from '../assets/icon-detailed-records.svg'
import fullyCustomizable from '../assets/icon-fully-customizable.svg'

const AdvancedStats = () => {
    return (
        <main className='advancedStats'>
            <section className='ASTextSection'>
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with<br/> our advanced statistics dashboard.</p>
            </section>
            <section className='ASBoxesSection'>
                <div className="boxes box1">
                    <div className='imgDiv'><img src={brandRecognition}/></div>
                    <h2>Brand Recognition</h2>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content</p>
                </div>
                <div className='line line1'></div>
                <div className="boxes box2">
                    <div className='imgDiv'><img src={detailedRecords}/></div>
                    <h2>Detailed Records</h2>
                    <p>Gain insights on who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className='line line2'></div>
                <div className="boxes box3">
                    <div className='imgDiv'><img src={fullyCustomizable}/></div>
                    <h2>Fully Customizable</h2>
                    <p>Improve brand awareness and content discoverablity through Customizable links, supercharging audience engagement.</p>
                </div>
            </section>
        </main>
    )
}

export default AdvancedStats