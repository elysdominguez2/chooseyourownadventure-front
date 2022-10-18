import "./App.css";
import "./index.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import {
  Homepage,
  Login,
  SignUp,
  CityPage,
  NeighbourhoodPage,
  NeighbourhoodPageById,
  PointsOfInterest,
  EndAndSharePage,
} from "./pages";
import { fetchCitiesById } from "./store/cities/thunks";

function App() {
  const dispatch = useDispatch();

  const idFromLocalStorage = localStorage.getItem("itinerary");
  const parsed = JSON.parse(idFromLocalStorage);
  const id = parseInt(parsed.city);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
    // dispatch(fetchCitiesById(id));
  }, [dispatch]);

  return (
    <div className="max-h-fit bg-cover bg-gradient-to-b from-white to-cust-light-blue pb-20">
      <Navigation />
      <MessageBox />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/city/:id" element={<CityPage />} />
        <Route path="/neighbourhood" element={<NeighbourhoodPage />} />
        <Route path="/neighbourhood/:id" element={<NeighbourhoodPageById />} />
        <Route
          path="/pointsofinterest/:nb_id/:poi_id"
          element={<PointsOfInterest />}
        />
        <Route path="/endandshare" element={<EndAndSharePage />} />
      </Routes>
    </div>
  );
}

export default App;
