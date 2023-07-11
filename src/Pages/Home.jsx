import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStocks } from '../redux/features/stocks/stocksSlice';
import { fetchDetails } from '../redux/features/details/detailsSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);
  const stocks = useSelector((state) => state.stocks.stocks);

  const [searchQuery, setSearchQuery] = useState('');
  const filteredStocks = stocks
    .filter((stock) => stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()));

  const displayedStocks = searchQuery ? filteredStocks : stocks;

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {
          displayedStocks.map((stock) => (
            <button
              type="button"
              key={stock.symbol}
              onClick={() => dispatch(fetchDetails(stock.symbol))}
            >
              <Link to={`/details/${stock.symbol}`}>
                {' '}
                { stock.companyName}
                {' '}
              </Link>
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
