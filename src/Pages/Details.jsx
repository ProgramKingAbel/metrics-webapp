import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const details = useSelector((state) => state.details.stock.historical);
  // eslint-disable-next-line
  console.log(details);

  return (
    <div>Details</div>
  );
};

export default Details;
