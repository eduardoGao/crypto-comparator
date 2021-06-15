import React from 'react'
import './styles/cryptoCard.css'

function StormGain({ currencie }) {
  // console.log(currencie.data?.BTC_USDT?.last_price)
  const price = Math.round(currencie * 20).toLocaleString()

  return (
    <div className='cryptoCard'>
      <h3 className='cryptoCard__title'>StormGain</h3>
      <h2 className='cryptoCard__price'>
        {currencie?.loading
          ? 'Cargando'
          : `$ ${price}`
        }
      </h2>
      <span>MXN</span>
    </div>
  )
}

export default StormGain
