import { configureStore } from '@reduxjs/toolkit';
import holdingsReducer from './slices/holdingsSlice'; // Ensure these are correctly imported
import capitalGainsReducer from './slices/capitalGainsSlice';
import selectedHoldingsReducer from './slices/selectedHoldingsSlice';

const store = configureStore({
  reducer: {
    holdings: holdingsReducer,
    capitalGains: capitalGainsReducer,
    selectedHoldings: selectedHoldingsReducer
  }
});

export default store;