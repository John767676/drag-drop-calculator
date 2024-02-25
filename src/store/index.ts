import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {calculatorReducer} from "./Slices/Calculator/calculatorSlice";
import {windowWidthReducer} from "./Slices/WindowSize/windowWidthSlice";

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    width: windowWidthReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch