import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Home.css'

function Home({ handleInput, redirect }) {
  return (
    <main className='home'>
      <Link to='/'>
        <h1 className='header__title'>Crypto Comparator</h1>
      </Link>
      <form className='form'>
        <label htmlFor="name">
          <span className='label'>Name</span>
          <input className='home__input' id='name' type="text" name='name' onChange={handleInput} />
        </label>
        <label htmlFor="email">
          <span className='label'>Email</span>
          <input className='home__input' id='email' type="email" name='email' onChange={handleInput} />
        </label>
        <label htmlFor="phone">
          <span className='label'>Phone</span>
          <input className='home__input' id='phone' type="number" name='phone' onChange={handleInput} />
        </label>
        <input className='home__button' type="button" value="See Cryptos 🚀" onClick={redirect} />
      </form>
      <p>Made by Eduardo Díaz 🇲🇽👨🏽‍💻</p>
    </main>
  )
}

export default Home