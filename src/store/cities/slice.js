import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
};

export const citiesSlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    citiesFetched: (state, action) => {
      state.loading = false;
      state.cities = action.payload;
    },
  },
});

export const { startLoading, citiesFetched } = citiesSlice.actions;
export default citiesSlice.reducer;
