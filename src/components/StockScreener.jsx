import React from 'react';
import { useSelector } from 'react-redux';
import Stack from 'react-bootstrap/Stack';

const StockScreener = () => {
  const details = useSelector((state) => state.details.stock.historical);
  if (!details) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">Open</div>
        <div className="p-2">Close</div>
        <div className="p-2">Change</div>
        <div className="p-2">% Change</div>
      </Stack>
      {
        details.map((item) => (
          <Stack key={Date.parse(item.date)} direction="horizontal" gap={3}>
            <div className="p-2">{ item.open }</div>
            <div className={`p-2 ${item.change < 0 ? 'negative' : 'positive'}`}>{item.close}</div>
            <div className={`p-2 ${item.change < 0 ? 'negative' : 'positive'}`}>{item.change}</div>
            <div className={`p-2 ${item.change < 0 ? 'negative' : 'positive'}`}>{item.changePercent}</div>
          </Stack>
        ))

      }

    </>
  );
};

export default StockScreener;
