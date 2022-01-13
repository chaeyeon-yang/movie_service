import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { nominalTypeHack } from 'prop-types';

function App() {
  const [loading, setLoading] = useState(true);
  const [converted, setConverted] = useState(false);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(43996.786053307);
  const [dollar, setDollar] = useState(1);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const changeCoin = (event) => {
    setValue(event.target.value);
  };
  const onChange = (event) => {
    setDollar(event.target.value);
  };
  const onClick = () => setConverted(true);

  return (
    <div>
      <h1>All The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={changeCoin}>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <h3>{value === 0 ? null : `Convert your USD to Coin`}</h3>
      <form onSubmit={onSubmit}>
        <input type="number" onChange={onChange}></input>
        <button
          onClick={onClick}
          style={{
            backgroundColor: 'tomato',
            color: 'white',
            borderRadius: 5,
          }}
        >
          Convert
        </button>
        <h3>
          {converted ? `You can get ${Math.floor(dollar / value)} coins` : null}
        </h3>
      </form>
    </div>
  );
}
export default App;
