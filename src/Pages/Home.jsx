import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import { fetchStocks } from '../redux/features/stocks/stocksSlice';
import { fetchDetails } from '../redux/features/details/detailsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  const stocks = useSelector((state) => state.stocks.stocks);

  const [searchQuery, setSearchQuery] = useState('');
  const filteredStocks = stocks
    .filter((stock) => stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()));

  const displayedStocks = searchQuery ? filteredStocks : stocks;

  return (
    <Container>
      <h1 style={{ padding: '1rem 0 0', textAlign: 'center', color: '#21C78F' }}>StoX</h1>
      <Row style={{ margin: '2rem 1rem', alignItems: 'center' }}>
        <Col xs={10} md={10}>
          <Form.Control
            type="text"
            placeholder="Search stock..."
            size="large"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Col>
        <Col>
          <CloseButton
            aria-label="Clear form"
            onClick={() => setSearchQuery('')}
          />
        </Col>
      </Row>
      <Row
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '1rem',
          marginRight: '1rem',
          height: '70vh',
          overflowY: 'scroll',
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        }}
      >
        <ListGroup
          style={{ fontSize: '0.6rem' }}
        >
          <ListGroup.Item
            disabled
            style={{ display: 'flex' }}
          >

            <Col bg="secondary">symbol</Col>
            <Col>Company Name</Col>
            <Col>Price</Col>
            <Col>Volume</Col>
            <Col>Beta</Col>
          </ListGroup.Item>
          {
          displayedStocks.map((stock) => (
            <ListGroup.Item
              style={{ display: 'flex' }}
              action
              key={stock.symbol}
              onClick={() => {
                dispatch(fetchDetails(stock.symbol));
                navigate(`/details/${stock.symbol}`);
              }}
            >
              <Col><Badge bg="secondary">{ stock.symbol}</Badge></Col>
              <Col>{ stock.companyName}</Col>
              <Col>{parseFloat(stock.price.toFixed(2))}</Col>
              <Col>{ stock.volume}</Col>
              <Col>{parseFloat(stock.beta.toFixed(2))}</Col>
            </ListGroup.Item>
          ))
            }
        </ListGroup>
      </Row>
    </Container>
  );
};

export default Home;
