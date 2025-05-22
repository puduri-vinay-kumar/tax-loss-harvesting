import React, { useState } from 'react';

const TopSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tax Harvesting</h1>
        <a href="#" className="text-blue-500">How it works?</a>
      </div>
      <div className="bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md p-4 mt-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="text-blue-500 mr-2">ℹ️</span>
            <span className="font-bold">Important Notes & Disclaimers</span>
          </div>
          <button onClick={toggleExpand} className="text-blue-500">
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
        {isExpanded && (
          <ul className="mt-4 text-sm">
            <li>Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.</li>
            <li>Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.</li>
            <li>Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.</li>
            <li>Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term.</li>
            <li>Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted.</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopSection;