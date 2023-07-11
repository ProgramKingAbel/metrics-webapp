import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStocks } from '../redux/features/stocks/stocksSlice';

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
      <ul>
        {
          displayedStocks.map((stock) => (
            <li key={stock.symbol}>{ stock.companyName }</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Home;
