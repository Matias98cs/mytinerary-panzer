import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userId: null,
    role: null,
    logged: false
}


export const userSlice = createSlice({
    name: 'auth',

    initialState,

    reducers: {
        setAuthUser: (state, action) => {
            state.user = action.payload
            state.userId = action.payload.id
            state.role = action.payload.role
            state.logged = true
        },
        deleteAuthUser: (state, action) => {
            state.user = null
            state.userId = null
            state.role = null
            state.logged = false
        }
    }
})

export const {setAuthUser,deleteAuthUser} = userSlice.actions
export default userSlice.reducer