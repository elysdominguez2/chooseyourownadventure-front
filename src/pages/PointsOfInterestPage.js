import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  selectPoiByID,
  selectNeighbourhoodyById,
} from "../store/neighbourhood/selectors";
import Map from "../components/Map";
import { TbArrowBigRight } from "react-icons/tb";
import { useEffect } from "react";

export const PointsOfInterest = () => {
  const { nb_id, poi_id } = useParams();
  const poi = useSelector(selectPoiByID(nb_id, poi_id));
  const neighbourhood = useSelector(selectNeighbourhoodyById(nb_id));

  useEffect(() => {
    const iternary = localStorage.getItem("itinerary");
    if (iternary) {
      const current = JSON.parse(iternary);
      localStorage.setItem(
        "itinerary",
        JSON.stringify({
          ...current,
          steps: [...current.steps, { poi: poi_id, nb: nb_id }],
        })
      );
    }
  }, [nb_id, poi_id]);
  //   let info = localStorage.getItem("iternary");
  //   console.log("Esto es info", info);
  return (
    <div>
      {/* Agregue este info para ver como se imprimia en pantalla */}
      {/* {info} */}
      {poi === null ? (
        "Loading..."
      ) : (
        <div>
          <h3>{poi.name}</h3>
          <img src={poi.imageUrl} alt="" width="200" />
          <p>Now go directly to this point of the map </p>
          <Map lat={poi.lat} lon={poi.lon} />
          <p>{poi.description}</p>
          <br />
          <p>
            This place is amazing, no? But your friends are looking at you and
            wondering what is next.
          </p>
          <p>You have to decide now</p>
          <div>
            <h3>Go to the next Points Of Interest</h3>
            {neighbourhood ? (
              neighbourhood.pointsOfInterests.map((poi) => {
                return (
                  <Link to={`/pointsofinterest/${neighbourhood.id}/${poi.id}`}>
                    {poi.name}
                    <TbArrowBigRight />
                  </Link>
                );
              })
            ) : (
              <p>loading</p>
            )}
          </div>
          <Link to={`/neighbourhood`}>Go to another neighboorhood</Link>
        </div>
      )}
    </div>
  );
};
