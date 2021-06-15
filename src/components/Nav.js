import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Nav.css'

function Nav() {
  return (
    <div className='nav'>
      <NavLink className='nav__item' to='/dashboard/bitcoin' activeClassName='selected'>Bitcoin</NavLink>
      <NavLink className='nav__item' to='/dashboard/ethereum' activeClassName='selected'>Ethereum</NavLink>
      <NavLink className='nav__item' to='/dashboard/ripple' activeClassName='selected'>Ripple</NavLink>
    </div>
  )
}

export default Nav
