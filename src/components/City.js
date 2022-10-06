import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../store/cities/thunks";
import { selectCities } from "../store/cities/selectors";
import { useEffect } from "react";
// import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function City() {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
  console.log("cities", cities);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);
  return (
    <div>
      <h3>Choose the city that you want to visit</h3>
      {!cities.length ? (
        "Loading"
      ) : (
        <div>
          {cities.map((city) => (
            <div key={city.id}>
              <Link to={`/city/${city.id}`}>{city.name}</Link>
              {/* <Button variant="contained" color="secondary">
                {city.name}
              </Button> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default City;
