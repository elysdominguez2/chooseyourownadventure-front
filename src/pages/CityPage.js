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
import Typography from "@mui/material/Typography";

export const CityPage = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCityById);

  const { id } = useParams();

  const [play] = useSound(phoneCallSound);

  const [call, setCall] = useState(false);

  const handleOpenAndCall = () => {
    setCall(!call);
  };
  //  const [open, setOpen] = useState(false);
  //  const handleOpen = () => setOpen(true);
  const handleClose = () => setCall(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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
              // toggleCall();
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
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            </div>
          )}

          <Link to="/guidecall">ask your money back</Link>
        </div>
      )}
    </div>
  );
};
