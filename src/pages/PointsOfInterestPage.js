import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  selectPoiByID,
  selectNeighbourhoodyById,
} from "../store/neighbourhood/selectors";
import Map from "../components/Map";
import { TbArrowBigRight } from "react-icons/tb";
import { useEffect } from "react";
import imagePosition from "../img/Luke-position.png";

export const PointsOfInterest = () => {
  const { nb_id, poi_id } = useParams();
  const poi = useSelector(selectPoiByID(nb_id, poi_id));
  const neighbourhood = useSelector(selectNeighbourhoodyById(nb_id));

  useEffect(() => {
    const itinerary = localStorage.getItem("itinerary");
    if (itinerary) {
      const current = JSON.parse(itinerary);
      localStorage.setItem(
        "itinerary",
        JSON.stringify({
          ...current,
          steps: [...current.steps, { poi: poi_id, nb: nb_id }],
        })
      );
    }
  }, [nb_id, poi_id]);
  let info = localStorage.getItem("itinerary");
  console.log("Esto es info", info);
  return (
    <div className="text-xl py-3 p-10 text-cust-dark-purple max-w-4xl m-auto">
      {poi === null ? (
        "Loading..."
      ) : (
        <div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl py-10 font-Lato font-semibold text-yellow-500 uppercase drop-shadow-lg shadow-cust-dark-purple">
              {poi.name}
            </h3>
            <img
              src={poi.imageUrl}
              alt=""
              width="350"
              className="mb-10 drop-shadow-lg  shadow-cust-dark-purple p-4 bg-white"
            />
            <p>Now go directly to this point of the map </p>
          </div>
          <Map lat={poi.lat} lon={poi.lon} />
          <p className=" text-center p-6">{poi.description}</p>
          <br />

          <div className="flex items-center">
            <div>
              <p>This place is amazing, no?</p>
              <p>
                But your friends are looking at you and wondering what is next.
              </p>
              <p>You have to decide now</p>
              <div>
                <h3 className="my-4 uppercase">
                  Go to the next Points Of Interest
                </h3>
                {neighbourhood ? (
                  neighbourhood.pointsOfInterests.map((poi) => {
                    return (
                      <Link
                        key={poi.id}
                        to={`/pointsofinterest/${neighbourhood.id}/${poi.id}`}
                        className="transition ease-in-out delay-150 text-xl px-4 py-2 text-cust-orange hover:-translate-y-1 hover:scale-110 hover:text-cust-aqua duration-300 drop-shadow-lg shadow-cust-dark-purple flex flex-row "
                      >
                        <p className="mr-4 text-4xl">
                          <TbArrowBigRight />
                        </p>
                        <p>
                          {poi.question}
                          <span className="  uppercase ml-1 font-semibold">
                            {poi.name}
                          </span>
                        </p>
                      </Link>
                    );
                  })
                ) : (
                  <p>loading</p>
                )}

                <Link
                  to={`/neighbourhood`}
                  className="transition ease-in-out delay-150 text-xl px-4 py-2 uppercase text-green-600 hover:-translate-y-1 hover:scale-110 hover:text-cust-aqua duration-300 drop-shadow-lg shadow-cust-dark-purple flex flex-row "
                >
                  <p className="mr-4 text-4xl">
                    <TbArrowBigRight />
                  </p>
                  Go to another neighboorhood
                </Link>
              </div>
            </div>
            <img src={imagePosition} alt="" className="w-72 max-h-72"></img>
          </div>
          <div className="ml-6 mt-10">
            <Link
              to={`/endandshare`}
              className=" bg-red-500 hover:bg-red-400 border-b-4 border-red-700 hover:border-red-500 text-white text-center text-xl py-2 px-4 rounded"
            >
              I want to finish my itinerary
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
