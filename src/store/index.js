import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import cityReducer from "./cities/slice";
import neighbourhoodReducer from "./neighbourhood/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    city: cityReducer,
    neighbourhood: neighbourhoodReducer,
  },
});
