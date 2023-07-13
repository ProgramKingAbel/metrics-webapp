import React from 'react';
import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';

const CandleDetails = () => {
  const details = useSelector((state) => state.details.stock.historical);
  const symbol = useSelector((state) => state.details.stock.symbol);
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
        padding: '1rem',
      },
      title: {
        text: `${symbol} Analysis`,
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
    theme: {
      mode: 'dark',
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#21C78F',
          downward: '#F9607B',
        },
        wick: {
          useFillColor: true,
        },
      },
    },
  };

  return (
    <div style={{ margin: '1rem', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }}>
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
