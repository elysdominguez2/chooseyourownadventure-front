import axios from "axios";
import { startLoading, neighbourhoodFetchedById } from "./slice";

const API_URL = `https://choose-own-adventure.onrender.com/`;

//Fetch Neighbourhood By Id
export const fetchNeighbourhoodsById = (id) => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    console.log("About to call BE to get Neighbourhood id: " + id);
    const response = await axios.get(`${API_URL}/neighbourhood/${id}`);
    console.log(
      "Response from BE for Neighbourhood id: " + id + ": " + response
    );

    const neighbourhood = response.data;
    dispatch(neighbourhoodFetchedById(neighbourhood));
  } catch (e) {
    console.log(e.message);
  }
};
