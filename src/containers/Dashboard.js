import React, { useState, useEffect } from 'react'

function Dashboard() {
  const local = localStorage.getItem('user')
  const data = JSON.parse(local)

  const [currencies, setCurrencies] = useState([])
  const fetchCall = () => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple')
      .then(res => res.json())
      .then(data => setCurrencies(data))
  }

  useEffect(() => {
    fetchCall()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCall()
    }, 5000)

    return () => clearInterval(interval)
  }, [currencies])

  return (
    <div>
      <h1>{data.name}</h1>
      <div>
        {currencies[0]?.current_price}
      </div>
    </div>
  )
}

export default Dashboard
