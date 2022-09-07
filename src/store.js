import { configureStore } from '@reduxjs/toolkit';
import citiesAPI from './features/citiesAPI'

export default configureStore({
    reducer: {
        [citiesAPI.reducerPath] : citiesAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(citiesAPI.middleware)
  })

