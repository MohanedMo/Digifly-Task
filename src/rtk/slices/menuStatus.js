import { createSlice } from "@reduxjs/toolkit";

export const menuStatus = createSlice({
    initialState : false,
    name: "menuStatus",
    reducers:{
        openMenu: (state, action)=>{
            state = action.payload
            return state
        }
    }
})


export const {openMenu} = menuStatus.actions
export default menuStatus.reducer