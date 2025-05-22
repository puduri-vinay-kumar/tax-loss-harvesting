import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PreHarvestingCard from './components/PreHarvestingCard';
import PostHarvestingCard from './components/PostHarvestingCard';
import HoldingsTable from './components/HoldingsTable';
import { fetchHoldings, fetchCapitalGains } from './mockApis';
import { setHoldings } from './slices/holdingsSlice';
import { setCapitalGains } from './slices/capitalGainsSlice';
import TopSection from './components/TopSection';

const App = () => {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    fetchHoldings().then(data => dispatch(setHoldings(data)));
    fetchCapitalGains().then(data => dispatch(setCapitalGains(data.capitalGains)));
  }, [dispatch]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <div className="container mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <TopSection/>
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={toggleDarkMode}
            >
              Toggle {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
          <PreHarvestingCard />
          <PostHarvestingCard />
          <HoldingsTable />
        </div>
      </div>
    </div>
  );
};

export default App;