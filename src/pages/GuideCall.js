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

//////
// const DIV_MODAL_STYLE = {
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%,-50%)",
//   backgroundColor: "#fff",
//   borderRadius: "5px",
//   padding: "40px",
//   zIndex: 1000,
// };
// const DIV_OVERLAY_STYLE = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: "rgba(0,0,0,.3)",
//   zIndex: 1000,
// };

// function AddReview({ children, open, close, updateComment }) {

//   if (!open) return null;

//   return (
//     <>
//       <div style={DIV_OVERLAY_STYLE} />
//       <div style={DIV_MODAL_STYLE}>
//         <div className="form-container">
//           <button onClick={close} className="button-close">
//             x
//           </button>
//          <p>Hello</p>

//         </div>
//         {children}
//       </div>
//     </>
//   );
// }
