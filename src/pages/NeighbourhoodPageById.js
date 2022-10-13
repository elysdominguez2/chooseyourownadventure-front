import { useDispatch, useSelector } from "react-redux";
import { fetchNeighbourhoodsById } from "../store/neighbourhood/thunks";
import { selectNeighbourhoodyById } from "../store/neighbourhood/selectors";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Map from "../components/Map";

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
    <div>
      {neighbourhood === null ? (
        "Loading..."
      ) : (
        <div>
          <p>Greate choice, you are going to {neighbourhood.name} now.</p>
          <p>Follow the map</p>
          <Map lat={neighbourhood.lat} lon={neighbourhood.lon} />
          <p>{neighbourhood.description}</p>

          <h3>What point of interest would you like to visit</h3>
          {neighbourhood.pointsOfInterests.map((poi) => {
            return (
              <Link to={`/pointsofinterest/${neighbourhood.id}/${poi.id}`}>
                {poi.name}
                <TbArrowBigRight />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
