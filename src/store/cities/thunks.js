import axios from "axios";
import {
  startLoading,
  citiesFetched,
  cityFetchedById,
  journeyInfoFetched,
} from "./slice";
import { selectCityById } from "./selectors";

const API_URL = `https://choose-own-adventure.onrender.com`;

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

//Fetch City By Id
export const fetchCitiesById = (id) => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    console.log("About to call BE to get city id: " + id);
    const response = await axios.get(`${API_URL}/city/${id}`);
    console.log("Response from BE for city id: " + id + ": " + response);

    const city = response.data;
    dispatch(cityFetchedById(city));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchJourneyInfo =
  (itineraryInput) => async (dispatch, getState) => {
    const itinerary = JSON.parse(itineraryInput);
    console.log("itinerary", itinerary);
    dispatch(fetchCitiesById(itinerary.city));

    setTimeout(() => {
      const cityDetails = selectCityById(getState());
      console.log("this city", cityDetails);

      const pointsOfInterests = itinerary.steps.map((step) => {
        return selectPoiByNbAndPoiId(cityDetails, step.nb, step.poi);
      });

      const journeyInfo = {
        cityDetails: cityDetails,
        pointsOfInterests: pointsOfInterests,
      };

      dispatch(journeyInfoFetched(journeyInfo));
    }, 1000);
  };

const selectPoiByNbAndPoiId = (cityDetails, nb_id, poi_id) => {
  const nb = cityDetails?.neighbourhoods?.find(
    (nb) => nb.id === parseInt(nb_id)
  );
  return nb?.pointsOfInterests.find((poi) => poi.id === parseInt(poi_id));
};
