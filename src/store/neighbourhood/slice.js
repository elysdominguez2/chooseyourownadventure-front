import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  neighbourhoodDetails: null,
};

export const neighbourhoodSlice = createSlice({
  name: "neighbourhood",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },

    neighbourhoodFetchedById: (state, action) => {
      state.loading = false;
      state.neighbourhoodDetails = action.payload;
    },
  },
});

export const { startLoading, neighbourhoodFetchedById } =
  neighbourhoodSlice.actions;
export default neighbourhoodSlice.reducer;
