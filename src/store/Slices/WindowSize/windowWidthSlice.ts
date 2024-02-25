import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {windowWidthType} from "./windowWidthType";

const initialState: windowWidthType = {
    width: window.innerWidth
}

const windowWidthSlice = createSlice({
    name: 'windowWidth',
    initialState,
    reducers: {
        setWidth(state,action: PayloadAction<number>) {
            state.width = action.payload
        }
    }
})

export const windowWidthReducer = windowWidthSlice.reducer
export const {setWidth} = windowWidthSlice.actions