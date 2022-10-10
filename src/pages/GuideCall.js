import "./style.css";
import { ImPhoneHangUp } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { selectCityById } from "../store/cities/selectors";
import { useSelector } from "react-redux";

export const GuideCall = () => {
  const city = useSelector(selectCityById);
  return (
    <div className="container">
      <div className="container-guide-call">
        <h3 className="title-call">{city.name} Guide</h3>
        <div className="buttons-call">
          <button className="button-call red">
            <p className="icone-phone">
              <ImPhoneHangUp />
            </p>
          </button>
          <button className="button-call green">
            <p className="icone-phone">
              <ImPhone />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
