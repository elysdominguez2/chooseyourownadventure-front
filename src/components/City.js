import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../store/cities/thunks";
import { selectCities } from "../store/cities/selectors";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function City() {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
  //   console.log("cities", cities);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);
  return (
    <div>
      <h3 className="text-2xl pb-3 font-Lato font-semibold text-cust-dark-purple">
        Choose the city that you want to visit
      </h3>
      {!cities.length ? (
        "Loading"
      ) : (
        <div>
          {cities.map((city) => (
            <div key={city.id}>
              <Link to={`/city/${city.id}`}>{city.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default City;
