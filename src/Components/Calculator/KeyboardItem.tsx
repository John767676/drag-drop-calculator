import React from 'react';

interface KeyBoardItemProps {
    value: number | string
}

const KeyboardItem:React.FC<KeyBoardItemProps> = ({value}) => {
    return (
        <div className="keyboard__item" style={value === 0 ? {width: 152, height: 48, gridColumnStart: '1', gridColumnEnd: '3',cursor:'grab'} : {cursor:'grab'}}>
            <span className="keyboard__value">
                {value}
            </span>
        </div>
    );
};

export default KeyboardItem;