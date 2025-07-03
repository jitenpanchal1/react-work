import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Readuxfeature/Cartslice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
