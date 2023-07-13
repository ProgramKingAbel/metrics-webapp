import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CandleDetails from '../components/CandleDetails';
import StockScreener from '../components/StockScreener';

const Details = () => {
  const navigate = useNavigate();

  return (

    <Container>
      <Button
        style={{ marginTop: '2rem' }}
        variant="outline-primary"
        onClick={() => navigate('/')}
      >
        back
      </Button>
      <CandleDetails />
      <StockScreener />
    </Container>
  );
};

export default Details;
