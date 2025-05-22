import React from 'react';
import { useSelector } from 'react-redux';

const PreHarvestingCard = () => {
  const capitalGains = useSelector(state => state.capitalGains) || { stcg: { profits: 0, losses: 0 }, ltcg: { profits: 0, losses: 0 } };
  const stcgProfits = capitalGains?.stcg?.profits ?? 0;
  const stcgLosses = capitalGains?.stcg?.losses ?? 0;
  const ltcgProfits = capitalGains?.ltcg?.profits ?? 0;
  const ltcgLosses = capitalGains?.ltcg?.losses ?? 0;
  const stcgNet = stcgProfits - stcgLosses;
  const ltcgNet = ltcgProfits - ltcgLosses;
  const realisedGains = stcgNet + ltcgNet;

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md mb-6">
      <h3 className="font-bold text-lg mb-4">Pre-Harvesting</h3>
        <div className="flex justify-between">
        <div>
          <p>Short-term Profits: <span className="font-semibold">₹{stcgProfits}</span></p>
          <p>Short-term Losses: <span className="font-semibold">₹{stcgLosses}</span></p>
          <p>Net Short-term Gains: <span className="font-semibold">₹{stcgNet}</span></p>
        </div>
        <div>
          <p>Long-term Profits: <span className="font-semibold">₹{ltcgProfits}</span></p>
          <p>Long-term Losses: <span className="font-semibold">₹{ltcgLosses}</span></p>
          <p>Net Long-term Gains: <span className="font-semibold">₹{ltcgNet}</span></p>
        </div>
      </div>
      <div className="mt-4">
        <p>Realised Capital Gains: <span className="font-bold text-xl">₹{realisedGains}</span></p>
      </div>
    </div>
  );
};

export default PreHarvestingCard;





/*import React from 'react';
import { useSelector } from 'react-redux';

const PreHarvestingCard = () => {
  const capitalGains = useSelector(state => state.capitalGains) || { stcg: {profits: 0, losses: 0}, ltcg: { profits: 0, losses: 0} };

  const stcgProfits = capitalGains?.stcg?.profits ?? 0;
  const stcgLosses = capitalGains?.stcg?.losses ?? 0;
  const ltcgProfits = capitalGains?.ltcg?.profits ?? 0;
  const ltcgLosses = capitalGains?.ltcg?.losses ?? 0;

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6">
      <h3 className="font-bold text-lg mb-4">Pre-Harvesting</h3>
      <div className="flex justify-between">
        <div>
          <p>Short-term Profits: <span className="font-semibold">₹{stcgProfits}</span></p>
          <p>Short-term Losses: <span className="font-semibold">₹{stcgLosses}</span></p>
        </div>
        <div>
          <p>Long-term Profits: <span className="font-semibold">₹{ltcgProfits}</span></p>
          <p>Long-term Losses: <span className="font-semibold">₹{ltcgLosses}</span></p>
        </div>
      </div>
      <div className="mt-4">
        <p>Net Capital Gains: <span className="font-bold text-xl">₹{stcgProfits - stcgLosses + ltcgProfits - ltcgLosses}</span></p>
        <p>Realised Capital Gains: <span className="font-bold text-xl">₹{/* Realised Gains }</span></p>
      </div>
    </div>
  );
};

export default PreHarvestingCard;
``*/