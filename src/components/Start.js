import { FaCity } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { BsCameraFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { Link } from "react-router-dom";
import City from "../components/City";

function Start() {
  const token = useSelector(selectToken);
  return (
    <div>
      <h2>Choose your own Adventure</h2>
      <p>
        A Turism App where you are your own guide, and you have to decide your
        own road
      </p>
      <div>
        <p>
          Choose a city <FaCity />
        </p>

        <p>
          Invite your firiends <GiThreeFriends />
        </p>

        <p>
          Go to the start point <MdLocationOn />
        </p>

        <p>
          Take pictures and enjoy it <BsCameraFill />
        </p>
      </div>
      <div>
        {token ? (
          ("Now you can start the adventure", (<City />))
        ) : (
          <Link to="/login">Login to start</Link>
        )}
      </div>
    </div>
  );
}

export default Start;
