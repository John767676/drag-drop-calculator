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
        setNum(state,action:PayloadAction<string>) {
            if (action.payload === '.' && state.firstNum === null && state.operation === null) {
                alert('you can not start number with dot')
            } else if (state.firstNum === null && state.operation === null) {
                state.firstNum = action.payload
            }
            else if (state.firstNum !== null && state.operation === null){
                state.firstNum = state.firstNum.concat(action.payload)
            }

            if (state.operation !== null && state.secondNum === null && action.payload === '.') {
                return alert('you can not start number with dot')
            } else if (state.operation !== null && state.secondNum === null) {
                state.secondNum = action.payload
            } else if (state.operation !== null && state.secondNum !== null) {
                state.secondNum = state.secondNum.concat(action.payload)
            }
        },
        setOperationNum(state,action:PayloadAction<'plus' | 'minus' | 'div' | 'mul'>) {
            if (state.firstNum !== null) {
                state.operation = action.payload
            } else {
                alert('set first number')
            }
        },
        setProcess(state,action:PayloadAction<string>) {
            state.process = action.payload
        },
        setResult(state) {
            if (state.firstNum === null || state.secondNum === null || state.operation === null) return alert('You do not set first/second number or operation')
            switch (state.operation) {
                case 'plus':
                    return {
                        ...state,
                        firstNum: null,
                        secondNum: null,
                        operation: null,
                        result: +(Number(state.firstNum) + Number(state.secondNum)).toFixed(4)
                    }
                case 'minus':
                    return {
                        ...state,
                        firstNum: null,
                        secondNum: null,
                        operation: null,
                        result: +(Number(state.firstNum) - Number(state.secondNum)).toFixed(4)
                    }
                case 'div':
                    if (state.secondNum === '0') {
                        return {
                            ...state,
                            firstNum: null,
                            secondNum: null,
                            operation: null,
                            result: 'Деление на ноль'
                        }
                    } else {
                        return {
                            ...state,
                            firstNum: null,
                            secondNum: null,
                            operation: null,
                            result: +(Number(state.firstNum) / Number(state.secondNum)).toFixed(4)
                        }
                    }
                case 'mul':
                    return {
                        ...state,
                        firstNum: null,
                        secondNum: null,
                        operation: null,
                        result: +(Number(state.firstNum) * Number(state.secondNum)).toFixed(4)
                    }
                default:
                    return {
                        ...state,
                        firstNum: null,
                        secondNum: null,
                        operation: null,
                        result: 0
                    }
            }
        }
    }
})

export const calculatorReducer = calculatorSlice.reducer
export const {setNum,setOperationNum, setProcess, setResult} = calculatorSlice.actions
