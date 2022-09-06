import { configureStore } from '@reduxjs/toolkit';
import citiesAPI from './features/citiesAPI'

export default configureStore({
    reducer: {
        [citiesAPI.reducerPath] : citiesAPI.reducer
    },
    middleware: (getAllCities) => getAllCities({
        immutableCheck: false,
        serializableCheck: false
    })
  })

