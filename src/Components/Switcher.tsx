import React from 'react';
import './Styles/swithcer-styles.css'
import { LuEye } from "react-icons/lu";
import { PiBracketsAngleLight } from "react-icons/pi";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {setProcess} from "../store/Slices/calculatorSlice";

const Switcher:React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <div className="switcher__wrapper">
            <div className="switcher__container">
                <button className='switcher__run' onClick={() => dispatch(setProcess('run'))}><LuEye/>Runtime</button>
                <button className='switcher__con' onClick={() => dispatch(setProcess('con'))}><PiBracketsAngleLight/>Constructor</button>
            </div>
        </div>
    );
};

export default Switcher;