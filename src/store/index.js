import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import cityReducer from "./cities/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    city: cityReducer,
  },
});
