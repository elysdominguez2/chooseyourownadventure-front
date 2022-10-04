import { FaCity } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { BsCameraFill } from "react-icons/bs";

function Start() {
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
      </div>
      <div>
        <p>
          Invite your firiends <GiThreeFriends />
        </p>
      </div>
      <div>
        <p>
          Go to the start point <MdLocationOn />
        </p>
      </div>
      <div>
        <p>
          Take pictures and enjoy it <BsCameraFill />
        </p>
      </div>
    </div>
  );
}

export default Start;
