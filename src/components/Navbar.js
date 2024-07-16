import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect (() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className= "navbar-logo" onClick={closeMobileMenu}>
              <i className="fa-brands fa-neos"/>akib
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  About Me
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                  Projects
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>PROJECTS</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar