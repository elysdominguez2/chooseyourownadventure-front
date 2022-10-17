import { useDispatch, useSelector } from "react-redux";
import { fetchJourneyInfo } from "../store/cities/thunks";
import { selectJourneyInfo } from "../store/cities/selectors";
import { useEffect } from "react";

export const EndAndSharePage = () => {
  const dispatch = useDispatch();
  const journeyInfo = useSelector(selectJourneyInfo);
  // console.log("Esto viene de End", journeyInfo);

  let info = localStorage.getItem("itinerary");
  console.log("Esto es info", info);

  useEffect(() => {
    dispatch(fetchJourneyInfo(info));
  }, [dispatch, info]);

  return (
    <div>
      {journeyInfo ? (
        <div>
          <h3> Congratulations</h3>
          <p>
            {" "}
            You and your friends finish an exiting itinerary in{" "}
            {journeyInfo.cityDetails.name}.
          </p>
          <p>
            You can see here where you went and also share it in your social
            media
          </p>
          <p>These are the points of interest that you visited:</p>
          {journeyInfo.pointsOfInterests.map((poi) => {
            return (
              <div>
                <p>{poi.name}</p>
              </div>
            );
          })}
          <div>
            <p>MAP HERE</p>
            <p>SHARE HERE</p>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};
