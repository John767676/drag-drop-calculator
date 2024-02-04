import {createSlice} from "@reduxjs/toolkit";
import {dragTypes} from "./dragTypes";

const initialState:dragTypes = {
    dropList: []
}

const dragSlice = createSlice({
    name: 'drag',
    initialState,
    reducers: {}
})

export const dragReducer = dragSlice.reducer
export const {} = dragSlice.actions