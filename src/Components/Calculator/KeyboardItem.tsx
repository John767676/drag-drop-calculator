import React from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setNum} from "../../store/Slices/calculatorSlice";

interface KeyBoardItemProps {
    value: number | string
}

const KeyboardItem:React.FC<KeyBoardItemProps> = ({value}) => {

    const dispatch = useAppDispatch()

    return (
        <div className="keyboard__item" style={value === 0 ? {width: 152, height: 48, gridColumnStart: '1', gridColumnEnd: '3', cursor: 'pointer'} : {cursor: 'pointer'}} onClick={() => dispatch(setNum(value === ',' ? '.' : String(value)))}>
            <span className="keyboard__value">
                {value}
            </span>
        </div>
    );
};

export default KeyboardItem;