import { createSlice } from '@reduxjs/toolkit';

const holdingsSlice = createSlice({
  name: 'holdings',
  initialState: [],
  reducers: {
    setHoldings: (state, action) => action.payload
  }
});

export const { setHoldings } = holdingsSlice.actions;
export default holdingsSlice.reducer;