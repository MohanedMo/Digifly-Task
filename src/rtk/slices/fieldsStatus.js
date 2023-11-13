import { createSlice } from "@reduxjs/toolkit";

export const fieldsStatus = createSlice({
    initialState : "",
    name: "fieldsStatus",
    reducers:{
        openFields: (state, action)=>{
            state = action.payload
            return state
        }
    }
})


export const {openFields} = fieldsStatus.actions
export default fieldsStatus.reducer