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
      <Row style={{ margin: '1rem 0.1rem', alignItems: 'center' }}>
        <Col style={{ textAlign: 'center', fontSize: '1rem' }}>
          <span>
            <i className="uil uil-angle-left-b" />
            {' '}
            stoX
          </span>
        </Col>
        <Col xs={6}>
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
      <ListGroup
        variant="flush"
        style={{
          fontSize: '1rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.5rem',
        }}
      >
        {
        displayedStocks.map((stock) => (
          <ListGroup.Item
            style={{ border: '1px solid #6c757d', display: 'grid', gridTemplateColumns: '1fr' }}
            action
            key={stock.symbol}
            onClick={() => {
              dispatch(fetchDetails(stock.symbol));
              navigate(`/details/${stock.symbol}`);
            }}
          >
            <Col style={{ display: 'flex', flexDirection: 'column' }}>
              <i style={{ fontSize: '2rem', color: '#6c757d', alignSelf: 'flex-end' }} className="uil uil-arrow-circle-right" />
              <Badge style={{ padding: '1rem' }} bg="secondary">{stock.symbol}</Badge>
            </Col>
            <Col style={{ fontWeight: 'bold' }}>{ stock.companyName}</Col>
            <Col>
              <span>
                Price:
                {'  '}
                {parseFloat(stock.price.toFixed(2))}
              </span>
            </Col>
            <Col>
              <span>
                Volume:
                {'  '}
                {stock.volume}
              </span>
            </Col>
            <Col>
              <span>
                Beta:
                {'  '}
                {parseFloat(stock.beta.toFixed(2))}
              </span>
            </Col>
          </ListGroup.Item>
        ))
          }
      </ListGroup>
    </Container>
  );
};

export default Home;
