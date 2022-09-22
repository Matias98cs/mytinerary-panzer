import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reload: null,
}

export const likeSlice = createSlice({
    name: 'like',

    initialState,

    reducers: {
        setReload: (state, action) => {
            state.reload = action.payload
        },
        
    }
})


export const {setReload} = likeSlice.actions
export default likeSlice.reducer