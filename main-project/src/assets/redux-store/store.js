import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../refuxfeature/Counterslice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
