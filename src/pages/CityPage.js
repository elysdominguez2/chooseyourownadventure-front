import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesById } from "../store/cities/thunks";
import { selectCityById } from "../store/cities/selectors";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useSound from "use-sound";
import phoneCallSound from "../sounds/phonecall1.mp3";
import Map from "../components/Map";

import { ImPhoneHangUp } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import imagePhone from "../img/phonecall.png";

export const CityPage = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCityById);

  const { id } = useParams();

  const [play] = useSound(phoneCallSound);

  const [call, setCall] = useState(false);

  const handleOpenAndCall = () => {
    setCall(!call);
  };

  const [route] = useState(id);
  useEffect(() => {
    localStorage.setItem(
      "itinerary",
      JSON.stringify({ city: route, steps: [] })
    );
  }, [route]);

  useEffect(() => {
    dispatch(fetchCitiesById(id));
  }, [dispatch, id]);

  return (
    <div className="text-xl py-3 text-center text-cust-dark-purple h-screen mt-20 flex flex-col max-w-4xl m-auto">
      {city === null ? (
        "Loading..."
      ) : (
        <div>
          <h2 className="text-4xl py-10 font-Lato font-semibold text-yellow-500 uppercase drop-shadow-lg shadow-cust-dark-purple">
            {city.name}
          </h2>
          <p>{city.description}</p>
          <p className="px-10">
            You are going to start your tourist ride and the guide send you this
            location for the meeting
          </p>
          <Map lat={city.lat} lon={city.lon} />
          <p className="px-10">
            You and your friends arrive to this place but you can't find the
            guy.
          </p>
          <p>So, you have to decide</p>
          <button
            onClick={() => {
              play();
              handleOpenAndCall();
            }}
            className=" bg-yellow-500 hover:bg-yellow-400 border-b-4 border-yellow-700 hover:border-yellow-500 text-white text-center text-lg py-2 px-4 my-10 rounded uppercase"
          >
            Call the guide
          </button>
          {call && (
            <div>
              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gradient-to-t from-cust-light-blue">
                <div className="relative  ">
                  <div className="border-0 rounded-lg shadow-lg relative w-96 bg-white outline-none focus:outline-none justify-center">
                    <div className=" p-6 border-t border-solid border-blueGray-200 rounded-b  ">
                      <h3 className="title-call absolute text-white uppercase m-20">
                        {city.name} Guide
                      </h3>
                      <div className="flex absolute">
                        <Link to="/neighbourhood">
                          <p className="icone-phone rounded-full p-5 bg-red-500 text-white ml-20 mt-[420px]">
                            <ImPhoneHangUp />
                          </p>
                        </Link>
                        <Link to="">
                          <p className="icone-phone rounded-full p-5 bg-green-600 text-white ml-16 mt-[420px]">
                            <ImPhone />
                          </p>
                        </Link>
                      </div>
                      <img src={imagePhone} alt="" width="500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <br />
          <Link
            to="/"
            className=" bg-yellow-500 hover:bg-yellow-400 border-b-4 border-yellow-700 hover:border-yellow-500 text-white text-center text-lg py-3  px-4 rounded uppercase"
          >
            Ask your money back
          </Link>
        </div>
      )}
    </div>
  );
};
