import React from 'react';
import { useSelector } from 'react-redux';

const TableRow = ({ holding, onSelect }) => {
  const selectedHoldings = useSelector(state => state.selectedHoldings);
  const isChecked = selectedHoldings.some(item => item.coin === holding.coin);

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="p-2 border-b dark:border-gray-600">
          <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onSelect(holding)}
        />
      </td>
      <td className="p-2 border-b dark:border-gray-600 flex items-center">
        <img src={holding.logo} alt={holding.coinName} className="w-6 h-6 mr-2" />
        {holding.coinName}
      </td>
      <td className="p-2 border-b dark:border-gray-600">{holding.totalHolding.toFixed(4)}</td>
            <td className="p-2 border-b dark:border-gray-600">{holding.averageBuyPrice.toFixed(2)}</td>
      <td className="p-2 border-b dark:border-gray-600">{holding.currentPrice.toFixed(2)}</td>
      <td className="p-2 border-b dark:border-gray-600 text-red-500">
        {holding.stcg.gain.toFixed(2)}
      </td>
      <td className="p-2 border-b dark:border-gray-600 text-green-500">
        {holding.ltcg.gain.toFixed(2)}
      </td>
      <td className="p-2 border-b dark:border-gray-600">
        {isChecked ? holding.totalHolding : '-'}
      </td>
    </tr>
  );
};

export default TableRow;




/*import React from 'react';

const TableRow = ({ holding, onSelect }) => (
  <tr>
    <td>
      <input type="checkbox" onChange={() => onSelect(holding)} />
    </td>
    <td>{holding.coinName}</td>
    <td>{holding.totalHolding}</td>
    <td>{holding.averageBuyPrice}</td>
    <td>{holding.currentPrice}</td>
    <td>{holding.stcg.gain}</td>
    <td>{holding.ltcg.gain}</td>
    <td>{holding.totalHolding}</td>
  </tr>
);

export default TableRow;

import React from 'react';
import { useSelector } from 'react-redux';

const TableRow = ({ holding, onSelect }) => {
  const selectedHoldings = useSelector(state => state.selectedHoldings);
  const isChecked = selectedHoldings.some(item => item.coin === holding.coin);
  
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="p-2 border-b dark:border-gray-600">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onSelect(holding)}
        />
      </td>
      <td className="p-2 border-b dark:border-gray-600 flex items-center">
        <img src={holding.logo} alt={holding.coinName} className="w-6 h-6 mr-2" />
        {holding.coinName}
      </td>
      <td className="p-2 border-b dark:border-gray-600">{holding.totalHolding}</td>
      <td className="p-2 border-b dark:border-gray-600">{holding.averageBuyPrice}</td>
      <td className="p-2 border-b dark:border-gray-600">{holding.currentPrice}</td>
      <td className="p-2 border-b dark:border-gray-600 text-red-500">{holding.stcg.gain}</td>
      <td className="p-2 border-b dark:border-gray-600 text-green-500">{holding.ltcg.gain}</td>
      <td className="p-2 border-b dark:border-gray-600">{holding.totalHolding}</td>
    </tr>
  );
};

export default TableRow;*/