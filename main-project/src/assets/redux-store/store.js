import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../refuxfeature/Counterslice";
import todoReducer from "../refuxfeature/Todoredus";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
