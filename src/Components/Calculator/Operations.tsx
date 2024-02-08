import React from 'react';
import OperatorItem from "./OperatorItem";
import '../Styles/operations-style.css'


const Operations:React.FC = () => {

    type operationType = {
        symbol: string,
        operation: 'plus' | 'minus' | 'div' | 'mul'
    }

    const operations: operationType[] = [
        {
            symbol: '/',
            operation: 'div'
        },
        {
            symbol: 'x',
            operation: 'mul'
        },
        {
            symbol: '-',
            operation: 'minus'
        },
        {
            symbol: '+',
            operation: 'plus'
        }
    ]

    return (
        <div className="operations__wrapper">
            {operations.map((operator,i) => (<OperatorItem symbol={operator.symbol} operation={operator.operation} key={i}/>))}
        </div>
    );
};

export default Operations;