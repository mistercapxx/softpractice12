import { configureStore } from "@reduxjs/toolkit";

import uiReducer from './ui_slice';
import cartReducer from './cart_slice'

const store = configureStore({
    reducer: {
///multiple state slices
      ///состояние ui будет управляться редюсером uiReducer.
      ///наше состояние состоит из частей, каждая из которых управляется своим срезом состояния (slice
        ui: uiReducer,
        cart: cartReducer,
      },
});

export default store;
