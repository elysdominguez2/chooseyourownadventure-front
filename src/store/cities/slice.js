import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
  cityDetails: {},
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
    cityFetchedById: (state, action) => {
      state.loading = false;
      state.cityDetails = action.payload;
    },
  },
});

export const { startLoading, citiesFetched, cityFetchedById } =
  citiesSlice.actions;
export default citiesSlice.reducer;
