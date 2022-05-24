import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
  reducer: { user: userSlice.reducer, movie: movieSlice.reducer },
});

export default store;
