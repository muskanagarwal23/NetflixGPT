import React from 'react'
import Logo from '../assets/Images/Netflix_Logo.png'

function Header() {
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-50'>
        <img className='w-40'
         src={Logo} alt='netflix'/>
    </div>
  )
}

export default Header