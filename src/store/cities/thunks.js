import axios from "axios";
import { startLoading, citiesFetched } from "./slice";

const API_URL = `http://localhost:4000`;

export const fetchCities = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${API_URL}/city`);

    const allCities = response.data;

    dispatch(citiesFetched(allCities));
  } catch (e) {
    console.log(e.message);
  }
};
