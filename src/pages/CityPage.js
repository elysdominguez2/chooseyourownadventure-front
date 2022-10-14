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

  const [route, setRoute] = useState(id);
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
    <div>
      {city === null ? (
        "Loading..."
      ) : (
        <div>
          <h1>{city.name}</h1>
          <p>{city.description}</p>
          <p>
            You are going to start your tourist ride and the guide send you this
            location for the meeting
          </p>
          <p>MAP here</p>
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
          >
            Call the guide
          </button>
          {call && (
            <div>
              <Modal
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
              </Modal>
            </div>
          )}

          <Link to="/">ask your money back</Link>
        </div>
      )}
    </div>
  );
};
