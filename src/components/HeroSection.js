import React from 'react';
import '../App.css';
import './HeroSection.css';
import './Cards.css';
import CardItem from './CardItem'


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted/>
        <h1>About Me</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='public/images/MyPic.jpg'
                  text='Hello, I am Nakib. I am heavily interested in sports, gaming, and politics. I pretty much watch almost all the sports, such as Futball, American Football, Formula 1, Basketball, etc. Currently, I game on a lot of F1 24, CS2, FIFA, etc.'
                  label='Nakib Lakhota (Me)'
                  path='/'
                />
              </ul>
            </div>
          </div>
    </div>
  )
}

export default HeroSection
