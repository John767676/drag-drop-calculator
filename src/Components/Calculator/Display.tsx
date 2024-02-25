import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import '../Styles/display-styles.css';


const Display:React.FC = () => {

    const {firstNum, secondNum, operation, result} = useAppSelector(state => state.calculator)
    const {width} = useAppSelector(state => state.width)

    function displayNumCreator(string: string) {

        const [integerPart, decimalPart] = string.split('.');

        let formattedNumber = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        if (decimalPart) {
            formattedNumber += `.${decimalPart}`;
        } else if (string.endsWith('.')) {
            formattedNumber += '.';
        }

        return formattedNumber;
    }

    const value = displayNumCreator(result !== null && operation === null && firstNum === '0' ? result : secondNum === '0' ? firstNum : secondNum)

    return (
            <div className="display__wrapper">
                <div className="display__inner-wrapper">
                        <span className="display__result" style={width <= 420 && value.length <= 14 ? {fontSize: 20} : width<= 420 && value.length > 14 ? {fontSize: 18} : width > 420 && value.length < 14 ? {fontSize: 24} : {fontSize: 19}}>
                        {value}
                    </span>
                </div>
            </div>
    );
};

export default Display;