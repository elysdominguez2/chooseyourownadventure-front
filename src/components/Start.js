import { FaCity } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { BsCameraFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { Link } from "react-router-dom";
import City from "../components/City";
import image from "../img/Luke-hi.png";

function Start() {
  const token = useSelector(selectToken);
  return (
    <div>
      <h2 className=" text-4xl px-4 py-3 text-center font-Bebas ">
        Choose your own Adventure
      </h2>
      <p>A TURISM APP</p>
      <p>where you are your own guide</p>
      <p>and you have to decide</p>
      <p>your itinerary</p>
      <div className="columns-2">
        <p>
          Choose a city <FaCity />
        </p>

        <p>
          Invite your friends <GiThreeFriends />
        </p>

        <p>
          Go to the start point <MdLocationOn />
        </p>

        <p>
          Take pictures and enjoy it <BsCameraFill />
        </p>

        <div>
          {token ? (
            ("Now you can start the adventure", (<City />))
          ) : (
            <Link to="/login">Login to start</Link>
          )}
        </div>
        <div>
          <img src={image} alt="" className="w-50"></img>
        </div>
      </div>
    </div>
  );
}

export default Start;
