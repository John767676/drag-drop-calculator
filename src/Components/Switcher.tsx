import React from 'react';
import './Styles/swithcer-styles.css'
import { LuEye } from "react-icons/lu";
import { PiBracketsAngleLight } from "react-icons/pi";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {setProcess} from "../store/Slices/Calculator/calculatorSlice";
import {useAppSelector} from "../hooks/useAppSelector";

const Switcher:React.FC = () => {


    const dispatch = useAppDispatch()

    const {process} = useAppSelector(state => state.calculator)

    return (
        <div className={process === 'run' ? 'switcher__wrapper-run-sm' : 'switcher__wrapper'}>
            <div className='switcher__container'>
                <button style={process === 'run' ? {backgroundColor: 'white', border: '1px solid #E2E3E5'} : undefined} className={process === 'run' ? 'switcher__sw-sm' : 'switcher__sw'} onClick={() => dispatch(setProcess('run'))}><i><LuEye size={16} color={process === 'run' ? '#5D5FEF' : undefined}/></i><span>Runtime</span></button>
                <button style={process === 'con' ? {backgroundColor: 'white', border: '1px solid #E2E3E5'} : undefined} className={process === 'run' ? 'switcher__sw-sm' : 'switcher__sw'} onClick={() => dispatch(setProcess('con'))}><i><PiBracketsAngleLight size={16} color={process === 'con' ? '#5D5FEF' : undefined}/></i><span>Constructor</span></button>
            </div>
        </div>
    );
};

export default Switcher;