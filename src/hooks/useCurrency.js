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
const useCurrency = (labelTitle, initState, currencyList) => {

    //Custom Hook state
    const [currencyState, setCurrencyState] = useState('');

        const SelectCurrency = () => (
            <Fragment>
                <Label>{labelTitle}</Label>
                <Select
                    onChange={e => setCurrencyState(e.target.value)}
                    value={currencyState}
                >
                    <option value="">-- Seleccione una --</option>
                    {currencyList.map(option => (
                        <option key={option.code} value={option.code}>{option.name}</option>
                    ))}
                </Select>
            </Fragment>
        )
        //return state, interface and set fn
        return [currencyState, SelectCurrency, setCurrencyState];
}
 
export default useCurrency;