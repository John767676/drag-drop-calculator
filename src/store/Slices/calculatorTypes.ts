
export interface CalculatorTypes {
    firstNum: string | null,
    secondNum: string | null,
    operation: 'plus' | 'minus' | 'div' | 'mul' | null,
    result: number | string,
    process: string
}