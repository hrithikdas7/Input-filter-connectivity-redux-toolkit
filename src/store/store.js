import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './inputSLice'


export const store = configureStore({
    reducer:{
        inputSlice: inputReducer
    }
})