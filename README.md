# Crypto Comparator

<img width="1324" alt="Captura de Pantalla 2021-06-15 a la(s) 18 18 06" src="https://user-images.githubusercontent.com/65258878/122135407-0b524a00-ce06-11eb-9e11-dcbfddd62720.png">

App to compare different cryptocurrencies prices.

API's consulted:
- https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP&tsyms=USD
- https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin
- https://public-api.stormgain.com/api/v1/ticker

The user be able to convert MXN to Bitcoin ot Ethereum without any click.
<img width="1324" alt="Captura de Pantalla 2021-06-15 a la(s) 18 22 18" src="https://user-images.githubusercontent.com/65258878/122135717-a0554300-ce06-11eb-9cb9-4bf8bd8b1c62.png">

The API calls are fetching data every 15 seconds thanks to useEffect React hook and setInterval function.
