import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../store/cities/thunks";
import { selectCities } from "../store/cities/selectors";
import { useEffect } from "react";

function City() {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
  console.log("cities", cities);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);
  return (
    <div>
      <h2>Show me all the cities</h2>
      {!cities.length ? (
        "Loading"
      ) : (
        <div>
          {cities.map((city) => (
            <div key={city.id}>
              <button>{city.name}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default City;
