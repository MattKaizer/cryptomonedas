import React from 'react';
import useCurrency from '../hooks/useCurrency';
import styled from '@emotion/styled';

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

const Form = () => {

    const currencyList = [
        { code: 'USD', name: 'Dolar de Estados Unidos' },
        { code: 'MXN', name: 'Peso Mexicano' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Libra Esterlina' }
    ];

    //Custom hook
    const [state, SelectCurrency, setstate] = useCurrency('Elige tu modeda de cambio', '', currencyList);

    return ( 
        <form>
            <SelectCurrency />
            <Button 
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Form;