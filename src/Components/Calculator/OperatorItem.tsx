import React from 'react';

interface OperationProps {
    symbol: string,
    operation: string
}

const OperatorItem:React.FC<OperationProps> = ({operation,symbol}) => {
    return (
        <div className="operation__item" style={{cursor: 'grab'}}>
            <span className="operation__symbol">
                {symbol}
            </span>
        </div>
    );
};

export default OperatorItem;