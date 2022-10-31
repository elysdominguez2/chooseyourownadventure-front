import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../store/cities/thunks";
import { selectCities } from "../store/cities/selectors";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TbArrowBigRight } from "react-icons/tb";

function City() {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
  //   console.log("cities", cities);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);
  return (
    <div>
      <h3 className="text-2xl pb-8 font-Lato font-semibold text-cust-dark-purple">
        What city do you want to visit?
      </h3>
      {!cities.length ? (
        "Loading"
      ) : (
        <div>
          {cities.map((city) => (
            <div
              key={city.id}
              className="text-xl px-4 py-2 uppercase text-cust-orange drop-shadow-lg shadow-cust-dark-purple flex flex-row "
            >
              <p className="mr-4 text-4xl">
                <TbArrowBigRight />
              </p>
              {city.id === 3 || city.id === 4 || city.id === 5 ? (
                <p>{city.name} - coming soon</p>
              ) : (
                <Link
                  to={`/city/${city.id}`}
                  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-cust-aqua duration-300"
                >
                  {city.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default City;
