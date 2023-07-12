import React from 'react';
import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';

const CandleDetails = () => {
  const details = useSelector((state) => state.details.stock.historical);
  if (!details) {
    return <div>Loading...</div>;
  }
  const result = details
    .map((item) => [Date.parse(item.date), item.open, item.high, item.low, item.close]);
  const data = {
    series: [
      {
        data: result,
      },
    ],
    options: {
      chart: {
        type: 'candlestick',
        height: 350,
      },
      title: {
        text: details.symbol,
        align: 'left',
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  };

  return (
    <div>
      <Chart
        type="candlestick"
        height={400}
        options={data.options}
        series={data.series}
      />
    </div>
  );
};

export default CandleDetails;
