import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesById } from "../store/cities/thunks";
import { selectCityById } from "../store/cities/selectors";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useSound from "use-sound";
import phoneCallSound from "../sounds/phonecall1.mp3";
import Map from "../components/Map";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ImPhoneHangUp } from "react-icons/im";
import { ImPhone } from "react-icons/im";

export const CityPage = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCityById);

  const { id } = useParams();

  const [play] = useSound(phoneCallSound);

  const [call, setCall] = useState(false);

  const handleOpenAndCall = () => {
    setCall(!call);
  };

  const handleClose = () => setCall(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
    <div className="text-xl py-3 text-center text-cust-dark-purple">
      {city === null ? (
        "Loading..."
      ) : (
        <div>
          <h2 className="text-4xl py-10 font-Lato font-semibold text-yellow-500 uppercase drop-shadow-lg shadow-cust-dark-purple">
            {city.name}
          </h2>
          <p>{city.description}</p>
          <p>
            You are going to start your tourist ride and the guide send you this
            location for the meeting
          </p>
          <Map lat={city.lat} lon={city.lon} />
          <p>
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
              {/* <Modal
                open={call}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="container">
                    <div className="container-guide-call">
                      <h3 className="title-call">{city.name} Guide</h3>
                      <div className="buttons-call">
                        <Link to="/neighbourhood" className="button-call red">
                          <p className="icone-phone">
                            <ImPhoneHangUp />
                          </p>
                        </Link>
                        <Link to="" className="button-call green">
                          <p className="icone-phone">
                            <ImPhone />
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Box>
              </Modal> */}

              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative  ">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 h-screen bg-white outline-none focus:outline-none justify-center">
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b bg-phone bg-cover object-cover bg-center h-fit w-full  ">
                      <h3 className="title-call">{city.name} Guide</h3>
                      <Link to="/neighbourhood" className="button-call red">
                        <p className="icone-phone">
                          <ImPhoneHangUp />
                        </p>
                      </Link>
                      <Link to="" className="button-call green">
                        <p className="icone-phone">
                          <ImPhone />
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* FINNNNN */}
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
