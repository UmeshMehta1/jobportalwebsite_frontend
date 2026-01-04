import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
})

const authSlice = createSlice({
    name:"auth",

    initialState:{
        data:[],  
        status: STATUSES.IDLE,
        token: localStorage.getItem('token') || "",
        isAuthenticated: !!localStorage.getItem('token'),
        error: null,
    },

    reducers: {
          setUser(state, action){
            state.data= action.payload
            state.isAuthenticated = true
        },

        setStatus(state,action){
            state.status= action.payload
        },

        setError(state, action){
            state.error = action.payload
        },

        setToken(state, action){
            state.token= action.payload
            if(action.payload){
                state.isAuthenticated = true
            }
        },
    }

})


export const {setUser, setStatus, setToken, logOut, clearError, setError}= authSlice.actions

export default authSlice.reducer