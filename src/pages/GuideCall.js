import "./style.css";
import { ImPhoneHangUp } from "react-icons/im";
import { ImPhone } from "react-icons/im";

export const GuideCall = () => {
  return (
    <div className="container">
      <div className="container-guide-call">
        <h3 className="title-call">Amsterdam Guide</h3>
        <div className="buttons-call">
          <button className="button-call">
            <ImPhoneHangUp />
          </button>
          <button className="button-call">
            <ImPhone />
          </button>
        </div>
      </div>
    </div>
  );
};
