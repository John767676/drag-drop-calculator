import React from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setOperationNum} from "../../store/Slices/calculatorSlice";
import {useAppSelector} from "../../hooks/useAppSelector";

interface OperationProps {
    symbol: string,
    mOperation: 'plus' | 'minus' | 'div' | 'mul'
}

const OperatorItem:React.FC<OperationProps> = ({mOperation,symbol}) => {

    const dispatch = useAppDispatch()
    const {operation} = useAppSelector(state => state.calculator)

    return (
        <div className="operation__item" style={operation === mOperation ? {border: '1px solid #5D5FEF'} : undefined} onClick={() => dispatch(setOperationNum(mOperation))}>
            <span className="operation__symbol">
                {symbol}
            </span>
        </div>
    );
};

export default OperatorItem;