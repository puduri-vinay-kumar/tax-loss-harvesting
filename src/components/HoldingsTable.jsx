import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableRow from './TableRow';
import { setSelectedHoldings } from '../slices/selectedHoldingsSlice';

const HoldingsTable = () => {
  const dispatch = useDispatch();
  const holdings = useSelector(state => state.holdings);
  const selectedHoldings = useSelector(state => state.selectedHoldings);
  const [sortDirection, setSortDirection] = useState('asc'); // Track sorting direction

  const handleSelect = (holding) => {
    const isSelected = selectedHoldings.some(item => item.coin === holding.coin);
    const updatedSelection = isSelected
      ? selectedHoldings.filter(item => item.coin !== holding.coin)
      : [...selectedHoldings, holding];
    
    dispatch(setSelectedHoldings(updatedSelection));
  };

  const toggleSortDirection = () => {
    setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  // Sort holdings
    // Sort holdings based on short-term gain
  const sortedHoldings = [...holdings].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a.stcg.gain - b.stcg.gain;
    } else {
      return b.stcg.gain - a.stcg.gain;
    }
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="p-2">
              <input
                type="checkbox"
                onChange={() => {
                  if (selectedHoldings.length === holdings.length) {
                    dispatch(setSelectedHoldings([]));
                  } else {
                    dispatch(setSelectedHoldings(sortedHoldings));
                  }
                }}
                checked={selectedHoldings.length === holdings.length}
              />
            </th>
            <th className="p-2">Asset</th>
            <th className="p-2">Holdings</th>
            <th className="p-2">Avg Buy Price</th>
            <th className="p-2">Current Price</th>
            <th className="p-2 cursor-pointer" onClick={toggleSortDirection}>
              Short-Term Gain {sortDirection === 'asc' ? '↑' : '↓'}
            </th>
            <th className="p-2">Long-Term Gain</th>
            <th className="p-2">Amount to Sell</th>
          </tr>
        </thead>
        <tbody>
          {sortedHoldings.map((holding, index) => (
            <TableRow
              key={`${holding.coin}-${index}`}
              holding={holding}
              onSelect={handleSelect}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTable;


/*import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableRow from './TableRow';
import { setSelectedHoldings } from '../slices/selectedHoldingsSlice';

const HoldingsTable = () => {
  const dispatch = useDispatch();
  const holdings = useSelector(state => state.holdings);

  const selectedHoldings = useSelector(state => state.selectedHoldings);

  const handleSelect = (holding) => {
    const isSelected = selectedHoldings.some(item => item.coin === holding.coin);
    const updatedSelection = isSelected
      ? selectedHoldings.filter(item => item.coin !== holding.coin)
      : [...selectedHoldings, holding];
    
    dispatch(setSelectedHoldings(updatedSelection));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="p-2"><input type="checkbox" /></th>
            <th className="p-2">Asset</th>
            <th className="p-2">Holdings</th>
            <th className="p-2">Avg Buy Price</th>
            <th className="p-2">Current Price</th>
            <th className="p-2">Short-Term Gain</th>
            <th className="p-2">Long-Term Gain</th>
            <th className="p-2">Amount to Sell</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((holding,index) => (
            <TableRow key={`${holding.coin}-${index}`} holding={holding} onSelect={handleSelect} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTable;*/