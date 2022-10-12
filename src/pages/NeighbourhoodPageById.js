import { useDispatch, useSelector } from "react-redux";
import { fetchNeighbourhoodsById } from "../store/neighbourhood/thunks";
import { selectNeighbourhoodyById } from "../store/neighbourhood/selectors";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Map from "../components/Map";

import { TbArrowBigRight } from "react-icons/tb";

export const NeighbourhoodPageById = () => {
  const dispatch = useDispatch();
  const neighbourhood = useSelector(selectNeighbourhoodyById);
  //   console.log("here is this neigh", neighbourhood);

  const { id } = useParams();

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

          <Link to={`/pointsofinterest`}>
            <TbArrowBigRight />
          </Link>
        </div>
      )}
    </div>
  );
};
