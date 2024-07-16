import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Contact Me Via:
            </p>
            <p className='footer-subscription-text'>
                Email: lakhotanakibuddin@gmail.com
            </p>
            <p className='footer-subscription-text'>
                Phone Number: 7739343246
            </p>
        </section>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <a className='social-logo' href='/'>
                        <i className='fa-brands fa-neos'/> akib
                    </a>
                </div>
                <small className='website-rights'> Nakib © 2024</small>
                <div className='social-icons'>
                    <a className='social-icon-link linkedin'
                    href='https://www.linkedin.com/in/nakibuddin-lakhota-368ab1194/'
                    target = '_blank'
                    aria-label='LinkedIn'>
                    <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a className='social-icon-link resume'
                    href='Nakib Lakhota Resume.pdf'
                    target = '_blank'
                    aria-label='Resume'
                    download>
                    <i className="fa-regular fa-file"></i>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer