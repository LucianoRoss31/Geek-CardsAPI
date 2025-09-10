import React from 'react'
import './NavBar.css'

export const NavBar = () => {
  return (
    <div className='navbar'>
      <input type="text" placeholder='Encuentra la carta que buscas'/>
      <button className='navbutton'><b>Buscar</b></button>
    </div>
  )
}
