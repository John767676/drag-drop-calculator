import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import '../Styles/display-styles.css';


const Display:React.FC = () => {

    const {result} = useAppSelector(state => state.calculator)

    return (
            <div className="display__wrapper">
                <div className="display__inner-wrapper">
                    <span className="display__result">
                        {result}
                    </span>
                </div>
            </div>
    );
};

export default Display;