import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import useToggle from '../hooks/useToggle'
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuBtn from './MenuBtn'
import { ThemeModecontext } from '../contexts/ThemeMode';

const Navigation = () => {
  const { dark, setDark } = useContext(ThemeModecontext)
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef()
  const nav = useRef()

  const handleClick = () => {
    console.log(window.innerWidth)
      if (window.innerWidth < 700) {
        navRef.current.classList.toggle("addNavbar")
        nav.current.classList.toggle("sliderRight")
        setIsOpen(preve => !preve)
      }
  }

  return (
    <>
      <MenuBtn onClick={handleClick} isOpen={isOpen} />
      <div className="navbar-mobile" ref={navRef}>
        <nav className='nav' ref={nav}>
          <ul>
            <li>
              <NavLink to="/" onClick={handleClick} className="desktop" end>Home</NavLink>
              <a href="#" onClick={handleClick} className="mobile" end>Home</a>
            </li>
            <li>
              <NavLink to="/project" onClick={handleClick} className="desktop">Project</NavLink>
              <a href="#project" onClick={handleClick} className="mobile">Project</a>
            </li>
            <li>
              {/* <NavLink to="/service" onClick={handleClick} >Services</NavLink> */}
              <NavLink to="/skill" onClick={handleClick} className="desktop">Skills</NavLink>
              <a href="#skill" onClick={handleClick} className="mobile" >Skills</a>
            </li>
            {/* <li>
              <NavLink to="/about" onClick={handleClick} >About</NavLink>
            </li> */}
            <li>
              <NavLink to="/contact" onClick={handleClick} className="desktop">Contact</NavLink>
              <a href="#contact" onClick={handleClick} className="mobile">Contact</a>
            </li>
            <li >
              <div className='mode-dark-light' onClick={handleClick} >
                {dark ? <i className="material-icons icon-mode-light" onClick={setDark}>&#xe518;</i>
                  : <i className="fa-solid fa-moon icon-mode-dark" onClick={setDark}></i>
                }
              </div>
            </li>
          </ul>


        </nav>

      </div>
    </>
  )
}

export default Navigation