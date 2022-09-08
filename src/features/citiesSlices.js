import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const citiesSlice = createSlice({
    name: 'cities',

    initialState : {
        cities: []
    },

    reducers: {
        fetchFromServer: (state) => {
            state.cities = [
                {
                    city: "Cordoba",
                    country: "Argentina",
                    photo: "https://i.ytimg.com/vi/FkkXBD2tinQ/maxresdefault.jpg",
                    population: 32142,
                    fundation: "2002-12-01",
                    description: "Esto es una descripcion"
                }
            ]
        }
    }
})


export const {fetchFromServer} = citiesSlice.actions;

export default citiesSlice.reducer; 