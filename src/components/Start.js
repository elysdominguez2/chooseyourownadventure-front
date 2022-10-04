import { FaCity } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { BsCameraFill } from "react-icons/bs";
import Button from "@mui/material/Button";

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
        <input></input>
        <Button variant="contained" color="secondary">
          Start an Adventure
        </Button>
      </div>
    </div>
  );
}

export default Start;
