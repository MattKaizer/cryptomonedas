import React, { Fragment } from 'react';
import image from './cryptomonedas.png';
import styled from '@emotion/styled';
import Form from './components/Form';

//styled components
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
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
  &::after {
    content: '';
    width: 150px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

function App() {
  return (
    <Fragment>
      <Container>
        <div>
          <Image 
            src={image}
          />
        </div>
        <div>
          <Heading>Cotiza Criptomonedas al instante</Heading>
          <Form />
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
