import { configureStore } from '@reduxjs/toolkit';
import citiesAPI from './features/citiesAPI'
import itineraryAPI from './features/itineraryAPI';
import actitiesAPI from './features/activities.API';
import commenstAPI from './features/commentsAPI';

export default configureStore({
    reducer: {
        [citiesAPI.reducerPath] : citiesAPI.reducer,
        [itineraryAPI.reducerPath] : itineraryAPI.reducer,
        [actitiesAPI.reducerPath] : actitiesAPI.reducer,
        [commenstAPI.reducerPath] : commenstAPI.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(citiesAPI.middleware)
  })

