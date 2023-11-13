import { createSlice } from "@reduxjs/toolkit";

export const serviceStatusSlice = createSlice({
    initialState : "",
    name: "serviceStatusSlice",
    reducers:{
        openService: (state, action)=>{
            state = action.payload
            return state
        }
    }
})


export const {openService} = serviceStatusSlice.actions
export default serviceStatusSlice.reducer