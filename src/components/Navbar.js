import React from 'react'
import useToggle from '../hooks/useToggle'
import { Logo } from './Logo'

import Navigation from './Navigation'

const Navbar = () => {
  const [value,setToggle] = useToggle()
  return (
    <header className='header-top'>
      <div className='header-All'>
        <div className='container container-header'>
          <Logo />
          
          <Navigation />
        </div>
      </div>
    </header>

  )
}

export default Navbar