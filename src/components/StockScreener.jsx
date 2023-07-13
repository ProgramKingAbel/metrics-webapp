import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

const StockScreener = () => {
  const details = useSelector((state) => state.details.stock.historical);
  const symbol = useSelector((state) => state.details.stock.symbol);
  if (!details) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h2
        style={{ textAlign: 'center', padding: '1rem' }}
      >
        {symbol}
        {' '}
        Stock Screener
      </h2>
      <Table
        responsive
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Opening Price</th>
            <th>Closing Price</th>
            <th>Price Change</th>
            <th>% Change</th>
          </tr>
        </thead>
        <tbody>
          {
        details.map((item) => (
          <tr
            key={Date.parse(item.date)}
          >
            <td>{ item.date }</td>
            <td style={{ color: item.change < 0 ? '#F9607B' : '#21C78F' }}>{item.open}</td>
            <td style={{ background: item.change < 0 ? '#F9607B' : '#21C78F' }}>{item.close}</td>
            <td style={{ background: item.change < 0 ? '#F9607B' : '#21C78F' }}>{item.change}</td>
            <td style={{ background: item.change < 0 ? '#F9607B' : '#21C78F' }}>{item.changePercent}</td>
          </tr>
        ))

      }
        </tbody>
      </Table>
    </>
  );
};

export default StockScreener;
