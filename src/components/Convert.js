import React, { useState } from 'react'
import './styles/Convert.css'

function Convert({ price1, price2, price3, currencie }) {
  const USDcompare = Math.round(price1)
  const USDgecko = Math.round(price2?.data?.map(item => item.current_price))
  const USDstorm = Math.round(price3)

  const [convert, setConvert] = useState()
  const handleInput = (e) => {
    setConvert(e.target.value)
  }

  // console.log(parseInt(convert, 10) / 20)
  const MxnToCompare = convert / 20 / USDcompare
  const MxnToGecko = convert / 20 / USDgecko
  const MxnToStorm = convert / 20 / USDstorm

  return (
    <div className='convertContainer'>
      <div className='convert__input'>
        <h4 className='convert__title'>Convert</h4>
        <p>MXN to {currencie}</p>
        <label htmlFor="convert">
          <span className='convert__span'>MXN</span>
          <input className='input' type="number" name="convert" id="convert" onChange={handleInput} />
        </label>
      </div>
      <div className='convert__results'>
        <div className='convert__result'>
          <h5>Crypto Compare</h5>
          {
            convert === undefined
              ? <p>0</p>
              : <p>{MxnToCompare}</p>
          }
        </div>
        <div className='convert__result'>
          <h5>Coin Gecko</h5>
          {
            convert === undefined
              ? <p>0</p>
              : <p>{MxnToGecko}</p>
          }
        </div>
        <div className='convert__result'>
          <h5>Storm Gain</h5>
          {
            convert === undefined
              ? <p>0</p>
              : <p>{MxnToStorm}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Convert
