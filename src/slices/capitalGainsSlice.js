import { createSlice } from '@reduxjs/toolkit';

const capitalGainsSlice = createSlice({
  name: 'capitalGains',
  initialState: {
  "capitalGains": {
    "stcg": {
      "profits": 70200.88,
      "losses": 1548.53
    },
    "ltcg": {
      "profits": 5020,
      "losses": 3050
    }
  }
},
  reducers: {
    setCapitalGains: (state, action) => action.payload
  }
});

export const { setCapitalGains } = capitalGainsSlice.actions;
export default capitalGainsSlice.reducer;