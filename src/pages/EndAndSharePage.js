import { useDispatch, useSelector } from "react-redux";
import { fetchJourneyInfo } from "../store/cities/thunks";
import { selectJourneyInfo } from "../store/cities/selectors";
import { useEffect } from "react";
import imageFinish from "../img/Luke-finish.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export const EndAndSharePage = () => {
  const dispatch = useDispatch();
  const journeyInfo = useSelector(selectJourneyInfo);
  // console.log("Esto viene de End", journeyInfo);

  let info = localStorage.getItem("itinerary");
  console.log("Esto es info", info);

  useEffect(() => {
    dispatch(fetchJourneyInfo(info));
  }, [dispatch, info]);

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  return (
    <div className="text-xl mt-20 text-cust-dark-purple max-w-4xl m-auto h-screen">
      {journeyInfo ? (
        <div>
          <div className="flex items-center justify-center">
            <div>
              <h3 className=" text-6xl mb-4 font-Bebas text-cust-orange drop-shadow-lg shadow-cust-dark-purple ">
                {" "}
                Congratulations
              </h3>
              <p>
                {" "}
                You and your friends finish an exiting itinerary in{" "}
                <span className="text-xl py-10 font-Lato font-semibold text-yellow-500 uppercase drop-shadow-lg shadow-cust-dark-purple">
                  {journeyInfo.cityDetails.name}
                </span>
              </p>
              <p>Now you can share it and presume it with everybody</p>
              <p>You can see here where you went</p>
            </div>
            <img src={imageFinish} alt="" className="w-60"></img>
          </div>

          <p className="uppercase text-center">Look this beautiful map!</p>
          <p className="mb-10 text-center">
            These are the points of interest that you visited
          </p>
          <div className="flex flex-col items-center drop-shadow-xl shadow-cust-dark-purple">
            {journeyInfo.cityDetails.lat === null ||
            journeyInfo.cityDetails.lon === null ? (
              "Loading..."
            ) : (
              <MapContainer
                id="map"
                center={[
                  journeyInfo.cityDetails.lat,
                  journeyInfo.cityDetails.lon,
                ]}
                zoom={14}
                scrollWheelZoom={false}
                className="h-96 w-4/5 "
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {journeyInfo.pointsOfInterests.map((poi) => {
                  return (
                    <div key={poi.id}>
                      <Marker position={[poi.lat, poi.lon]}>
                        <Popup>
                          <p>{poi.name}</p>
                          <img src={poi.imageUrl} alt="" className="w-24"></img>
                        </Popup>
                      </Marker>
                    </div>
                  );
                })}
              </MapContainer>
            )}
          </div>
          <div className="m-20 flex justify-center">
            <button
              onClick={copy}
              className=" bg-yellow-500 hover:bg-yellow-400 border-b-4 border-yellow-700 hover:border-yellow-500 text-white text-center text-xl py-2 px-4 rounded"
            >
              Copy and share
            </button>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};
