import React from 'react';
import '../Styles/result-styles.css'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setResult} from "../../store/Slices/Calculator/calculatorSlice";

const Result:React.FC = () => {

    const dispatch = useAppDispatch()

    return (
        <div className="result__wrapper" style={{cursor: 'pointer'}}>
            <div className="result__inner-wrapper" onClick={() => dispatch(setResult())}>
                <span className="result__value">
                    =
                </span>
            </div>
        </div>
    );
};

export default Result;