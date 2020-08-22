import React, { Fragment, useState, useEffect } from 'react';
import image from './cryptomonedas.png';
import crypto from './crypto.png';
import styled from '@emotion/styled';
import Form from './components/Form';
import Quote from './components/Quote';
import Axios from 'axios';
import Spinner from './components/Spinner'; 

//styled components
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  position: relative;

  &::before{
    content: " ";
    background-image: url(${crypto});
    background-position: center;
    background-size: 100% 100%;
    width: 1.3em;
    height: 1.3em;
    display:inline-block;
    vertical-align: middle;
    margin-right: .2rem;
  }
  &::after {
    content: "";
    width: 150px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

function App() {

  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  //on currency or cryptocurrency change
  useEffect(() => {
    const cryptoQuote = async () => {
      if(currency === '') return;
      //API CALL for quote
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
      const response = await Axios.get(url);
      //show spinner
      setLoading(true);
      //hide spinner and show quote
      setTimeout(() => {
        setLoading(false)
        //save quote
        setResult(response.data.DISPLAY[cryptoCurrency][currency])
      }, 3000);
    }
    cryptoQuote()

  }, [currency, cryptoCurrency]);

  //Conditional component spinner and result
  const resultComponent = loading ? <Spinner /> : <Quote result={result}/>;

  return (
    <Fragment>
      <Container>
        <div>
          <Image 
            src={image}
          />
        </div>
        <div>
          <Heading>otiza Criptomonedas al instante</Heading>
          <Form 
            setCurrency={setCurrency} 
            setCryptoCurrency={setCryptoCurrency}
          />
          {resultComponent}
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
