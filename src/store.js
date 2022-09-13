import { configureStore } from '@reduxjs/toolkit';
import citiesAPI from './features/citiesAPI'
import itineraryAPI from './features/itineraryAPI';
import actitiesAPI from './features/activities.API';
import commenstAPI from './features/commentsAPI';
import usersAPI from './features/usersAPI';

export default configureStore({
    reducer: {
        [citiesAPI.reducerPath]: citiesAPI.reducer,
        [itineraryAPI.reducerPath]: itineraryAPI.reducer,
        [actitiesAPI.reducerPath]: actitiesAPI.reducer,
        [commenstAPI.reducerPath]: commenstAPI.reducer,
        [usersAPI.reducerPath]: usersAPI.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(citiesAPI.middleware)
})

