import React from 'react';
import OperatorItem from "./OperatorItem";
import '../Styles/operations-style.css'


const Operations:React.FC = () => {

    const operations = [
        {
            symbol: '/',
            operation: 'divide'
        },
        {
            symbol: 'x',
            operation: 'multiple'
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
        <div className="operations__wrapper" style={{cursor: 'grab'}}>
            {operations.map((operator,i) => (<OperatorItem symbol={operator.symbol} operation={operator.operation} key={i}/>))}
        </div>
    );
};

export default Operations;