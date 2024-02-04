import React from 'react';
import '../Styles/result-styles.css'

const Result:React.FC = () => {

    return (
        <div className="result__wrapper" style={{cursor: 'grab'}}>
            <div className="result__inner-wrapper">
                <span className="result__value">
                    =
                </span>
            </div>
        </div>
    );
};

export default Result;