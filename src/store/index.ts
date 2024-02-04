import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {calculatorReducer} from "./Slices/calculatorSlice";
import {dragReducer} from "./Slices/dragSlice";

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    drag: dragReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch