import { FaCity } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { BsCameraFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { Link } from "react-router-dom";
import City from "../components/City";
import imageHi from "../img/Luke-hi.png";
import imageCity from "../img/Luke-city.png";

function Start() {
  const token = useSelector(selectToken);
  return (
    <div className="max-w-2xl">
      <div className=" flex flex-col justify-center items-center">
        <h2 className=" text-6xl px-4  pt-20 pb-6 text-center font-Bebas text-cust-orange drop-shadow-lg shadow-cust-dark-purple ">
          Choose your own Adventure
        </h2>
        <p className="text-4xl px-4 py-3 text-center font-Lato font-semibold text-cust-dark-purple">
          A TURISM APP
        </p>
        <p className="text-2xl text-center font-Lato text-cust-dark-purple">
          where you are{" "}
          <span className="text-2xl font-Lato text-yellow-500 drop-shadow-lg  shadow-cust-dark-purple font-semibold">
            your own guide{" "}
          </span>
        </p>
        <p className="text-2xl text-center font-Lato text-cust-dark-purple">
          and you have to decide
        </p>
        <p className="text-2xl pb-10 font-Lato text-yellow-500 drop-shadow-lg  shadow-cust-dark-purple font-semibold">
          your itinerary
        </p>
      </div>
      <div className="columns-2">
        <div>
          <div className="flex flex-row text-2xl text-cust-dark-purple my-4">
            <p className="mr-4 text-4xl">
              <FaCity />
            </p>
            <p>Choose a city</p>
          </div>

          <div className="flex flex-row text-2xl text-cust-dark-purple">
            <p className="mr-4 text-4xl">
              <GiThreeFriends />
            </p>
            <p>Invite your friends</p>
          </div>

          <div className="flex flex-row text-2xl text-cust-dark-purple my-4">
            <p className="mr-4 text-4xl">
              <MdLocationOn />
            </p>
            <p>Go to the start point</p>
          </div>

          <div className="flex flex-row text-2xl text-cust-dark-purple mb-20">
            <p className="mr-4 text-4xl">
              <BsCameraFill />
            </p>
            <p>Take pictures and enjoy it</p>
          </div>

          {token ? (
            ((
              <p className="text-2xl font-Lato text-cust-dark-purple">
                Now you can start the adventure
              </p>
            ),
            (<City />))
          ) : (
            <Link
              to="/login"
              className=" bg-yellow-500 hover:bg-yellow-400 border-b-4 border-yellow-700 hover:border-yellow-500 text-white text-center text-xl py-2 px-4 rounded"
            >
              Login to start
            </Link>
          )}
        </div>
        <div>
          {token ? (
            <img src={imageCity} alt="" className="w-50"></img>
          ) : (
            <img src={imageHi} alt="" className="w-50"></img>
          )}
        </div>
      </div>
    </div>
  );
}

export default Start;
