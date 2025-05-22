import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PostHarvestingCard = () => {
  const capitalGainsFromStore = useSelector(state => state.capitalGains);
  const selectedHoldings = useSelector(state => state.selectedHoldings) ?? [];

  // Deep defaults to prevent "cannot read properties of undefined"
  const initialCapitalGains = {
    stcg: {
      profits: capitalGainsFromStore?.stcg?.profits ?? 0,
      losses: capitalGainsFromStore?.stcg?.losses ?? 0,
    },
    ltcg: {
      profits: capitalGainsFromStore?.ltcg?.profits ?? 0,
      losses: capitalGainsFromStore?.ltcg?.losses ?? 0,
    },
  };

  const [capitalGains, setCapitalGains] = useState(initialCapitalGains);

  useEffect(() => {
    const updatedSTCG = { ...initialCapitalGains.stcg };
    const updatedLTCG = { ...initialCapitalGains.ltcg };

    selectedHoldings.forEach(holding => {
      if (holding.stcg?.gain > 0) {
        updatedSTCG.profits += holding.stcg.gain;
      } else {
        updatedSTCG.losses -= holding.stcg?.gain ?? 0;
      }

      if (holding.ltcg?.gain > 0) {
        updatedLTCG.profits += holding.ltcg.gain;
      } else {
        updatedLTCG.losses -= holding.ltcg?.gain ?? 0;
      }
    });

    setCapitalGains({
      stcg: updatedSTCG,
      ltcg: updatedLTCG,
    });
  }, [selectedHoldings, capitalGainsFromStore]);

  const stcgProfits = capitalGains.stcg.profits;
  const stcgLosses = capitalGains.stcg.losses;
  const ltcgProfits = capitalGains.ltcg.profits;
  const ltcgLosses = capitalGains.ltcg.losses;

  const stcgNet = stcgProfits - stcgLosses;
  const ltcgNet = ltcgProfits - ltcgLosses;
  const realisedGainsAfter = stcgNet + ltcgNet;

  const realisedGainsBefore =
    initialCapitalGains.stcg.profits -
    initialCapitalGains.stcg.losses +
    initialCapitalGains.ltcg.profits -
    initialCapitalGains.ltcg.losses;

  const savings = realisedGainsBefore - realisedGainsAfter;

  return (
    <div className="p-6 bg-blue-500 text-white rounded-lg shadow-md mb-6">
      <h3 className="font-bold text-lg mb-4">After Harvesting</h3>
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
        <p>Realised Capital Gains After: <span className="font-bold text-xl">₹{realisedGainsAfter}</span></p>
        {realisedGainsBefore > realisedGainsAfter && (
          <p className="mt-2 text-sm">🎉 You are going to save up to ₹{savings}!</p>
        )}
      </div>
    </div>
  );
};

export default PostHarvestingCard;





/*import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PostHarvestingCard = () => {
  const initialCapitalGains = useSelector(state => state.capitalGains) || { stcg: { profits: 0, losses: 0 }, ltcg: { profits: 0, losses: 0 } };
  const selectedHoldings = useSelector(state => state.selectedHoldings) || [];

  const [capitalGains, setCapitalGains] = useState(initialCapitalGains);

  useEffect(() => {
    const updatedSTCG = { profits: 0, losses: 0 };
    const updatedLTCG = { profits: 0, losses: 0 };

    selectedHoldings.forEach(holding => {
      if (holding.stcg.gain > 0) {
        updatedSTCG.profits += holding.stcg.gain;
      } else {
        updatedSTCG.losses -= holding.stcg.gain;
      }
    });

    setCapitalGains({
      stcg: updatedSTCG,
      ltcg: updatedLTCG,
    });
  }, [selectedHoldings, initialCapitalGains]);

  // **Conditional Rendering Here**
  if (!capitalGains?.stcg || !capitalGains?.ltcg) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 rounded shadow-md bg-blue-500 text-white">
      <h3 className="font-bold text-lg mb-2">After Harvesting</h3>
      <div className="flex justify-between">
      <div>
        <p>Short-term Profits: <span className="font-semibold">₹{capitalGains.stcg.profits}</span></p>
          <p>Short-term Losses: <span className="font-semibold">₹{capitalGains.stcg.losses}</span></p>

      </div>
      <div>
        <p>Long-term Profits: <span className="font-semibold">₹{capitalGains.ltcg.profits}</span></p>
          <p>Long-term Losses: <span className="font-semibold">₹{capitalGains.ltcg.losses}</span></p>
      </div>
    </div>
    <div className="mt-4">
       <p>Net Capital Gains: <span className="font-bold text-xl">₹{capitalGains.stcg.profits - capitalGains.stcg.losses + capitalGains.ltcg.profits - capitalGains.ltcg.losses}</span></p>
       <p className="text-sm mt-2">🎉 You are going to save up to ₹{/* Savings }</p>
    </div>
        
      </div>
    
  );
};

export default PostHarvestingCard;*/