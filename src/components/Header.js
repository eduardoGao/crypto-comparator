import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'

function Header() {
  const local = localStorage.getItem('user')
  const data = JSON.parse(local)

  return (
    <div className='header'>
      <Link to='/'>
        <h1 className='header__title'>Crypto Comparator</h1>
      </Link>
      <p className='header__user'>Welcome {data.name} 👋</p>
    </div>
  )
}

export default Header
