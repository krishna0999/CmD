import { configureStore } from "@reduxjs/toolkit";
import { moviesAPi } from "./services/movies";

export default configureStore({
  reducer: {
    [moviesAPi.reducerPath]: moviesAPi.reducer,
  },
});
