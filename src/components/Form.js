import React, { useEffect, useState } from 'react';
import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';
import Error from './Error';
import styled from '@emotion/styled';
import Axios from 'axios';
import PropTypes from "prop-types";

//styled component
const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`

const Form = ({setCurrency, setCryptoCurrency}) => {
    //Crypto list
    const [cryptoList, setCryptoList] = useState([]);
    //error state
    const [ error, setError] = useState(false);

    const currencyList = [
        { code: 'USD', name: 'Dolar de Estados Unidos' },
        { code: 'MXN', name: 'Peso Mexicano' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Libra Esterlina' },
        { code: 'JPY', name: 'Yen Japonés' },
        { code: 'CNY', name: 'Yuan Renminbi Chino' },
        { code: 'HKD', name: 'Dolar Hong Kong' },
        { code: 'BZR', name: 'Real de Brasil' },
        { code: 'AUD', name: 'Dolar Australiano' },
    ];

    //Custom hook for currency
    const [currencyState, SelectCurrency] = useCurrency('Elige tu modeda de cambio', '', currencyList);
    //Custom hook for crypto currency
    const [cryptoCurrencyState, SelectCryptoCurrency] = useCryptocurrency('Elige tu cryptomoneda', '', cryptoList);

    //Call to API
    useEffect(() => {
        const getAPIinfo = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const response = await Axios.get(url);
            // console.log(response);  
            setCryptoList(response.data.Data)          
        }
        getAPIinfo()
    }, [])

    //submit
    const currencyQuote = e => {
        e.preventDefault();

        // validate form
        if(currencyState === '' || cryptoCurrencyState === '') {
            setError(true);
            return;
        }

        // passing data to App component
        setError(false);
        setCurrency(currencyState)
        setCryptoCurrency(cryptoCurrencyState)

    }

    return ( 
        <form
            onSubmit={currencyQuote}
        >
            {error ? <Error message={'Todos los campos son obligatorios'} />  : null}
            <SelectCurrency />
            <SelectCryptoCurrency />
            <Button 
                type="submit"
                value="Calcular"
            />
        </form>
     );
}

Form.propTypes = {
    setCurrency: PropTypes.func.isRequired,
    setCryptoCurrency: PropTypes.func.isRequired
}
 
export default Form;