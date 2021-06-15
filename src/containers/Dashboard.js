import React from 'react'

function Dashboard({ user }) {
  // let userName = localStorage.getItem('name')

  const local = localStorage.getItem('user')
  const data = JSON.parse(local)

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}

export default Dashboard
