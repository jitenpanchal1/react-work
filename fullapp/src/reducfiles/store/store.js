import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reduxslice/userslice";
import productReducer from "../reduxslice/addproduct";

const store = configureStore({

  reducer: {
    user: userReducer,
    product: productReducer,
  },
  
});

export default store;
