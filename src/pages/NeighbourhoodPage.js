import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesById } from "../store/cities/thunks";
import { selectCityById } from "../store/cities/selectors";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import imagePoint from "../img/Luke-point.png";

export const NeighbourhoodPage = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCityById);
  // console.log("I am calling: ", city);
  // console.log("I am calling + neighb: ", city?.neighbourhoods);

  // const { id } = useParams();

  const idFromLocalStorage = localStorage.getItem("itinerary");
  const parsed = JSON.parse(idFromLocalStorage);
  const id = parseInt(parsed.city);

  useEffect(() => {
    dispatch(fetchCitiesById(id));
  }, [dispatch, id]);

  return (
    <div className=" text-xl py-3 p-10  text-center text-cust-dark-purple ">
      <div className="flex max-w-2xl m-auto">
        <p className="mt-20 ml-20 text-left text-2xl">
          Now you are responsible to have a good adventure with your friends and
          you have to decide
        </p>
        <img src={imagePoint} alt="" className="w-40  mr-20"></img>
      </div>

      {!city || !id ? (
        "Loading..."
      ) : (
        <div className="flex flex-col items-center">
          {city.neighbourhoods.map((n) => (
            <div className="nb-box" key={n.id}>
              <h3 className="m-10">{n.name}</h3>
              <img
                src={n.imageUrl}
                alt=""
                width="500"
                className="m-10 drop-shadow-lg  shadow-cust-dark-purple p-4 bg-white"
              />
              <Link
                to={`/neighbourhood/${n.id}`}
                className=" bg-yellow-500 hover:bg-yellow-400 border-b-4 border-yellow-700 hover:border-yellow-500 text-white text-center text-lg  py-3  px-4 rounded uppercase"
              >
                Go to {n.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
