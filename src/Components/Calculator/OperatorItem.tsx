import React from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setOperationNum} from "../../store/Slices/calculatorSlice";

interface OperationProps {
    symbol: string,
    operation: 'plus' | 'minus' | 'div' | 'mul'
}

const OperatorItem:React.FC<OperationProps> = ({operation,symbol}) => {

    const dispatch = useAppDispatch()

    return (
        <div className="operation__item" style={{cursor: 'pointer'}} onClick={() => dispatch(setOperationNum(operation))}>
            <span className="operation__symbol">
                {symbol}
            </span>
        </div>
    );
};

export default OperatorItem;