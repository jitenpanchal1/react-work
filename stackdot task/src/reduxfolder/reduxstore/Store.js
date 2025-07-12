import { configureStore } from "@reduxjs/toolkit";
import AddproducrReducer from "../reduxfeature/Addproductslice";

const store = configureStore({
  reducer: {
    Add: AddproducrReducer,
  },
});

export default store;
