import React from 'react'

const MenuBtn = ({ onClick, isOpen }) => {
  return (
    <div className='menu-mobile-btn' onClick={onClick}>
      {
        isOpen ?
          <i class="fa-solid fa-xmark"></i>
          :
          <i className="fa-solid fa-bars"></i>
      }


    </div>
  )
}

export default MenuBtn