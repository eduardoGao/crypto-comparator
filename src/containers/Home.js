import React from 'react'

function Home({ handleInput, redirect }) {
  return (
    <main>
      <div>
        <form>
          <label htmlFor="name">
            <span>Name</span>
            <input id='name' type="text" name='name' onChange={handleInput} />
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input id='email' type="email" name='email' onChange={handleInput} />
          </label>
          <label htmlFor="phone">
            <span>Phone</span>
            <input id='phone' type="number" name='phone' onChange={handleInput} />
          </label>
          <input type="button" value="Next" onClick={redirect} />
        </form>
      </div>
    </main>
  )
}

export default Home