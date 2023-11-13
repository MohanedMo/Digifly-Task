import { createSlice } from "@reduxjs/toolkit";

export const certificateStatus = createSlice({
    initialState : "",
    name: "openCertificate",
    reducers:{
        openCertificate: (state, action)=>{
            state = action.payload
            return state
        }
    }
})


export const {openCertificate} = certificateStatus.actions
export default certificateStatus.reducer