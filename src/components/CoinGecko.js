import React from 'react'
import './styles/cryptoCard.css'

function CoinGecko({ currencie }) {
  // console.log(currencie)
  const price = Math.round(currencie?.data?.map(item => item.current_price * 20)).toLocaleString()

  // const price = raw?.toLocaleString()

  return (
    <div className='cryptoCard'>
      <h3 className='cryptoCard__title'>CoinGecko</h3>
      <h2 className='cryptoCard__price'>
        {currencie.loading 
          ? 'Cargando'
          : `$ ${price}`
        }
      </h2>
      <span>MXN</span>
    </div>
  )
}

export default CoinGecko
