import React from 'react';
import { useSelector } from 'react-redux';

const StockScreener = () => {
  const details = useSelector((state) => state.details.stock.historical);
  if (!details) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      {
              details.map((item) => (
                <li key={Date.parse(item.date)}>{ item.change }</li>
              ))
      }

    </ul>
  );
};

export default StockScreener;
