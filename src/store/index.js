import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./modules/main";
import homeReducer from "./modules/home";
import entireReducer from './modules/entire/reducers'
import detailReducer from './modules/detail'

const store = configureStore({
  reducer:{
    main:mainReducer,
    home:homeReducer,
    entire:entireReducer,
    detail:detailReducer,
  },
  middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths:['payload']
      },
    }).concat()
})

export default store