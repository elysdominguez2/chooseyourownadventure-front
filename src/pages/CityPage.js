import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesById } from "../store/cities/thunks";
import { selectCityById } from "../store/cities/selectors";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "../components/Map";

export const CityPage = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCityById);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCitiesById(id));
  }, [dispatch, id]);

  return (
    <div>
      {city === null ? (
        "Loading..."
      ) : (
        <div>
          <h1>{city.name}</h1>
          <p>{city.description}</p>
          <p>
            You are going to start your tourist ride and the guide send you this
            location for the meeting
          </p>
          <p>MAP here</p>
          <Map lat={city.lat} lon={city.lon} />
          <p>
            You and your friends arrive to this place but you can't find the
            guy.
          </p>
          <p>So, you have to decide</p>
          <button>call the guide</button>
          <button>ask your money back</button>
        </div>
      )}
    </div>
  );
};
