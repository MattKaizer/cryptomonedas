import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`
const useCryptocurrency = (labelTitle, initState, cryptoCurrencyList) => {

    //Custom Hook state
    const [cryptoCurrencyState, setCryptoCurrency] = useState('');

        const SelectCryptoCurrency = () => (
            <Fragment>
                <Label>{labelTitle}</Label>
                <Select
                    onChange={e => setCryptoCurrency(e.target.value)}
                    value={cryptoCurrencyState}
                >
                    <option value="">-- Seleccione una --</option>
                    {cryptoCurrencyList.map(option => (
                        <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                    ))}
                </Select>
            </Fragment>
        )
        //return state, interface and set fn
        return [cryptoCurrencyState, SelectCryptoCurrency, setCryptoCurrency];
}
 
export default useCryptocurrency;