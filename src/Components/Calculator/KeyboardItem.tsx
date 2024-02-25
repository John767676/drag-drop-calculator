import React from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setNum} from "../../store/Slices/Calculator/calculatorSlice";

interface KeyBoardItemProps {
    value: number | string
}

const KeyboardItem:React.FC<KeyBoardItemProps> = ({value}) => {

    const dispatch = useAppDispatch()

    return (
        <div className={value === 0 ? 'keyboard__item keyboard__item-zero' : 'keyboard__item'} onClick={() => dispatch(setNum(value === ',' ? '.' : String(value)))}>
            <span className="keyboard__value">
                {value}
            </span>
        </div>
    );
};

export default KeyboardItem;