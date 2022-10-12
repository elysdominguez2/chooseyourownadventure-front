import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesById } from "../store/cities/thunks";
import { selectCityById } from "../store/cities/selectors";

import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { TbArrowBigLeft } from "react-icons/tb";
import { TbArrowBigRight } from "react-icons/tb";

export const NeighbourhoodPage = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCityById);
  console.log("I am calling: ", city);
  console.log("I am calling + neighb: ", city.neighbourhoods);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCitiesById(id));
  }, [dispatch, id]);

  return (
    <div>
      <p>
        Now you are responsible to have a good adventure with your friends and
        you have to decide:
      </p>
      <p>
        <TbArrowBigLeft />
        <TbArrowBigRight />
      </p>
      <p>You can go to Jordaan, the coolest neighbourhood.</p>
      <p>
        Or you can go to see the famous Red Lights district and discover why
        Amsterdam is so unique
      </p>

      {city === null ? (
        "Loading..."
      ) : (
        <div>
          {city.neighbourhoods.map((n) => (
            <div key={n.id}>
              <img src={n.imageUrl} alt="" width="500" />
              <Link to={`/neighbourhood/${n.id}`}>{n.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
