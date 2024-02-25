import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CalculatorTypes} from "./calculatorTypes";

const initialState: CalculatorTypes = {
    firstNum: '0',
    secondNum: '0',
    operation: null,
    result: null,
    process: 'con'
}

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setNum(state,action:PayloadAction<string>) {
            if (state.operation === null) {
                if (state.firstNum === '0' && action.payload === '0') return
                if (state.firstNum === '0' && action.payload === '.') {
                    state.firstNum = state.firstNum.concat(action.payload)
                } else if (state.firstNum === '0' && action.payload !== '0') {
                    state.firstNum = action.payload
                } else if (state.firstNum.length < 16) {
                    state.firstNum = state.firstNum.includes('.') && action.payload === '.' ? state.firstNum : state.firstNum.concat(action.payload)
                }
            } else {
                if (state.secondNum === '0' && action.payload === '0') return
                if (state.secondNum === '0' && action.payload === '.') {
                    state.secondNum = state.secondNum.concat(action.payload)
                } else if (state.secondNum === '0' && action.payload !== '0') {
                    state.secondNum = action.payload
                } else if (state.secondNum.length < 16) {
                    state.secondNum = state.secondNum.includes('.') && action.payload === '.' ? state.secondNum : state.secondNum.concat(action.payload)
                }
            }

        },
        setOperationNum(state,action:PayloadAction<'plus' | 'minus' | 'div' | 'mul'>) {
            if (state.operation === null) {
                state.operation = action.payload
            } else {
                switch (state.operation) {
                    case 'plus':
                        return {
                            ...state,
                            firstNum: (+(Number(state.firstNum) + Number(state.secondNum)).toFixed(4)).toString(),
                            secondNum: '0',
                            operation: action.payload,
                        }
                    case 'minus':
                        return {
                            ...state,
                            firstNum: (+(Number(state.firstNum) - Number(state.secondNum)).toFixed(4)).toString(),
                            secondNum: '0',
                            operation: action.payload,
                        }
                    case 'div':
                        if (state.secondNum === '0') {
                            return {
                                ...state,
                                firstNum: '0',
                                secondNum: '0',
                                operation: null,
                                result: 'Деление на ноль'
                            }
                        } else {
                            return {
                                ...state,
                                firstNum: (+(Number(state.firstNum) / Number(state.secondNum)).toFixed(4)).toString(),
                                secondNum: '0',
                                operation: action.payload,
                            }
                        }
                    case 'mul':
                        return {
                            ...state,
                            firstNum: (+(Number(state.firstNum) * Number(state.secondNum)).toFixed(4)).toString(),
                            secondNum: '0',
                            operation: action.payload,
                        }
                    default:
                        return {
                            ...state,
                            firstNum: '0',
                            secondNum: '0',
                            operation: action.payload,
                        }
                }
            }
        },
        setProcess(state,action:PayloadAction<string>) {
            if (state.process !== action.payload) {
                return {
                    ...initialState,
                    process: action.payload
                }
            }
        },
        setResult(state) {
            switch (state.operation) {
                case 'plus':
                    return {
                        ...state,
                        firstNum: '0',
                        secondNum: '0',
                        operation: null,
                        result: (+(Number(state.firstNum) + Number(state.secondNum)).toFixed(4)).toString()
                    }
                case 'minus':
                    return {
                        ...state,
                        firstNum: '0',
                        secondNum: '0',
                        operation: null,
                        result: (+(Number(state.firstNum) - Number(state.secondNum)).toFixed(4)).toString()
                    }
                case 'div':
                    if (state.secondNum === '0') {
                        return {
                            ...state,
                            firstNum: '0',
                            secondNum: '0',
                            operation: null,
                            result: 'Деление на ноль'
                        }
                    } else {
                        return {
                            ...state,
                            firstNum: '0',
                            secondNum: '0',
                            operation: null,
                            result: (+(Number(state.firstNum) / Number(state.secondNum)).toFixed(4)).toString()
                        }
                    }
                case 'mul':
                    return {
                        ...state,
                        firstNum: '0',
                        secondNum: '0',
                        operation: null,
                        result: (+(Number(state.firstNum) * Number(state.secondNum)).toFixed(4)).toString()
                    }
                default:
                    return {
                        ...state,
                        firstNum: '0',
                        secondNum: '0',
                        operation: null,
                        result: null
                    }
            }
        }
    }
})

export const calculatorReducer = calculatorSlice.reducer
export const {setNum,setOperationNum, setProcess, setResult} = calculatorSlice.actions
