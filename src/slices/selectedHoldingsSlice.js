import { createSlice } from '@reduxjs/toolkit';

const selectedHoldingsSlice = createSlice({
  name: 'selectedHoldings',
  initialState: [],
  reducers: {
    setSelectedHoldings: (state, action) => action.payload
  }
});

export const { setSelectedHoldings } = selectedHoldingsSlice.actions;
export default selectedHoldingsSlice.reducer;