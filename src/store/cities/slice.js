import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
  cityDetails: null,
  journeyInfo: null,
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
      state.cityDetails = null;
      state.journeyInfo = null;
    },
    cityFetchedById: (state, action) => {
      state.loading = false;
      state.cityDetails = action.payload;
    },
    journeyInfoFetched: (state, action) => {
      state.journeyInfo = action.payload;
    },
  },
});

export const {
  startLoading,
  citiesFetched,
  cityFetchedById,
  journeyInfoFetched,
} = citiesSlice.actions;
export default citiesSlice.reducer;
