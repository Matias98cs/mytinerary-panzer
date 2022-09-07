import { configureStore } from '@reduxjs/toolkit';
import citiesAPI from './features/citiesAPI'
import itineraryAPI from './features/itineraryAPI';

export default configureStore({
    reducer: {
        [citiesAPI.reducerPath] : citiesAPI.reducer,
        [itineraryAPI.reducerPath] : itineraryAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(citiesAPI.middleware)
  })

