import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Rani Rangari</span>👋</h1>
    ),
    2: (
        <InfoBox 
        text="Picked up many skills along the way"
        link="/about"
        btnText="See here"
        />
    ),
    3: (
        <InfoBox 
        text="Built multiple projects over the time. "
        link="/projects"
        btnText="Visit here"
        />
    ),
    4: (
        <InfoBox 
        text="Want to connect with me ?"
        link="/contact"
        btnText="Let's talk"
        />
    ),
}

const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default Homeinfo
