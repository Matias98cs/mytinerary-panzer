import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reload: false,
}

export const likeSlice = createSlice({
    name: 'like',

    initialState,

    reducers: {
        setReload: (state, action) => {
            state.reload = !state.reload
        },
        
    }
})


export const {setReload} = likeSlice.actions
export default likeSlice.reducer