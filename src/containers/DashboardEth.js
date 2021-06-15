import React, { useState, useEffect } from 'react'
import { Header, Nav, CryptoCompare, CoinGecko, StormGain, Convert } from '../components'
import './styles/dashboard.css'

const coinGecko = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum'
const cryptoCompare = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD'
const stormGain = 'https://public-api.stormgain.com/api/v1/ticker'

function DashboardEth() {
  const [currencie1, setCurrencie1] = useState({
    loading: true,
    data: []
  })
  const [currencie2, setCurrencie2] = useState({
    loading: true,
    data: []
  })
  const [currencie3, setCurrencie3] = useState({
    loading: true,
    data: []
  })

  const fetchCall = (url, set) => {
    fetch(url)
      .then(res => res.json())
      .then(data => set({
        loading: false,
        data
      }))
  }

  useEffect(() => {
    fetchCall(cryptoCompare, setCurrencie1)
    fetchCall(coinGecko, setCurrencie2)
    fetchCall(stormGain, setCurrencie3)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrencie1({ loading: true })
      fetchCall(cryptoCompare, setCurrencie1)

      setCurrencie2({ loading: true })
      fetchCall(coinGecko, setCurrencie2)

      setCurrencie3({ loading: true })
      fetchCall(stormGain, setCurrencie3)
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section>
      <Header />
      <Nav />
      <div className='dash__cards'>
        <CryptoCompare currencie={currencie1?.data?.RAW?.ETH.USD.PRICE} />
        <CoinGecko currencie={currencie2} />
        <StormGain  currencie={currencie3.data?.ETH_USDT?.last_price} />
      </div>
      <Convert
        price1={currencie1?.data?.RAW?.ETH.USD.PRICE}
        price2={currencie2}
        price3={currencie3.data?.ETH_USDT?.last_price}
        currencie='Ethereum'
      />
    </section>
  )
}

export default DashboardEth
