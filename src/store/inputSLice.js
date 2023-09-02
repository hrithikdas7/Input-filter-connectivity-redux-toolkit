import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    filter: ''
}

export const inputSlice =createSlice({
    name:'inputSLice',
    initialState,
    reducers:{
        setFilter: (state, action) => {
            state.filter= action.payload
        }
    }
})

export const {setFilter} =inputSlice.actions

export default inputSlice.reducer