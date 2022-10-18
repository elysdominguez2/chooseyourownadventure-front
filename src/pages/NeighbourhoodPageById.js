import { useDispatch, useSelector } from "react-redux";
import { fetchNeighbourhoodsById } from "../store/neighbourhood/thunks";
import { selectNeighbourhoodyById } from "../store/neighbourhood/selectors";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Map from "../components/Map";
import imageMap from "../img/Luke-map.png";

import { TbArrowBigRight } from "react-icons/tb";

export const NeighbourhoodPageById = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const neighbourhood = useSelector(selectNeighbourhoodyById(id));
  console.log("here is this neigh", neighbourhood);

  useEffect(() => {
    dispatch(fetchNeighbourhoodsById(id));
  }, [dispatch, id]);

  return (
    <div className="text-xl py-3 p-10 text-cust-dark-purple flex max-w-4xl m-auto">
      {neighbourhood === null ? (
        "Loading..."
      ) : (
        <div>
          <p className=" text-center p-6">
            Greate choice, you are going to{" "}
            <span className="text-xl py-10 font-Lato font-semibold text-yellow-500 uppercase drop-shadow-lg shadow-cust-dark-purple">
              {neighbourhood.name}
            </span>{" "}
            now.
          </p>
          <p className=" text-center">Follow the map</p>
          <Map lat={neighbourhood.lat} lon={neighbourhood.lon} />
          <p className=" text-center p-6">{neighbourhood.description}</p>

          <div className="flex">
            <img src={imageMap} alt="" className="w-40  mr-20"></img>
            <div>
              <h3 className="p-4 text-2xl">
                What point of interest would you like to visit
              </h3>
              {neighbourhood.pointsOfInterests.map((poi) => {
                return (
                  <Link
                    key={poi.id}
                    to={`/pointsofinterest/${neighbourhood.id}/${poi.id}`}
                    className="transition ease-in-out delay-150 text-xl px-4 py-2 uppercase text-cust-orange hover:-translate-y-1 hover:scale-110 hover:text-cust-aqua duration-300 drop-shadow-lg shadow-cust-dark-purple flex flex-row "
                  >
                    <p className="mr-4 text-4xl">
                      {" "}
                      <TbArrowBigRight />
                    </p>

                    <p>{poi.name}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
