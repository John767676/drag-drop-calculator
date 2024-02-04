import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CalculatorTypes} from "./calculatorTypes";

const initialState: CalculatorTypes = {
    firstNum: null,
    secondNum: null,
    operation: null,
    result: 0,
    process: 'con'

}

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setFirstNum(state,action:PayloadAction<number>) {
            state.firstNum = action.payload
        },
        setSecondNum(state,action:PayloadAction<number>) {
            state.secondNum = action.payload
        },
        setOperationNum(state,action:PayloadAction<string>) {
            state.operation = action.payload
        },
        setProcess(state,action:PayloadAction<string>) {
            state.process = action.payload
        }
        // poss
        // setResult(state,action) {
        //     state.result = st
        // }
    }
})

export const calculatorReducer = calculatorSlice.reducer
export const {setFirstNum,setOperationNum,setSecondNum, setProcess} = calculatorSlice.actions
