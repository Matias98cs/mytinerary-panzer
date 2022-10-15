import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: 'message',
    initialState : {
        message : null,
        success: null
    },

    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload.message
            state.success = action.payload.success
        }
    }
})

export const {setMessage} = messageSlice.actions
export default messageSlice.reducer