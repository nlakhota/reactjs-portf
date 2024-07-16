import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>My Projects</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/Audio.jpg'
                    text='The program uses OpenAIs text-davinci-003 model to analyze call transcripts. It sets up a prompt with the transcript, utilizes the OpenAI Completion API, and processes MP3 files in a folder using a thread pool executor. Results are collected for further analysis. Click for more details.'
                    label='Audio Analysis (ChatGPT, Davinci, Whisper, Python)'
                    path='/AudioAnlyz'
                    />
                    <CardItem
                    src='images/Codebase.jpg'
                    text="his project develops a Scrapy-based web crawler to extract HTML documents from books.toscrape.com, employing rules to extract category links and parse product pages. It sets parameters for maximum pages and depth, tracking the number of pages to avoid exceeding limits. Data is processed with Scikit-learn for text analysis."
                    label='Project Codebase'
                    path='/Codebase'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards