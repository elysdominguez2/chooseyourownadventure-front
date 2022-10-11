import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesById } from "../store/cities/thunks";
import { selectCityById } from "../store/cities/selectors";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useSound from "use-sound";
import phoneCallSound from "../sounds/phonecall1.mp3";
import Map from "../components/Map";

export const CityPage = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCityById);

  const { id } = useParams();

  const [play] = useSound(phoneCallSound);

  const [call, setCall] = useState(false);

  const toggleCall = () => {
    setCall(!call);
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
              toggleCall();
            }}
          >
            Call the guide
          </button>
          {call && <p>This goes in the modal</p>}
          {/* <Link to="/guidecall"><button>call the guide</Link> */}
          <Link to="/guidecall">ask your money back</Link>
          {/* <label className="btn" for="modal-1">
            Show me modal with a cat
          </label> */}
        </div>
      )}
      {/* <input class="modal-state" id="modal-1" type="checkbox" />
      <div class="modal">
        <label class="modal__bg" for="modal-1"></label>
        <div class="modal__inner">
          <label class="modal__close" for="modal-1"></label>
          <h2>Caaaats FTW!</h2>
          <p>
            <img src="https://i.imgur.com/HnrkBwB.gif" alt="" />
            Aliquam in sagittis nulla. Curabitur euismod diam eget risus
            venenatis, sed dictum lectus bibendum. Nunc nunc nisi, hendrerit
            eget nisi id, rhoncus rutrum velit. Nunc vel mauris dolor. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam fringilla quis nisi eget imperdiet.
          </p>
        </div>
      </div> */}
    </div>
  );
};
