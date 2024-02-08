import React from 'react';
import KeyboardItem from "./KeyboardItem";
import '../Styles/keyboard-styles.css'

const Keyboard:React.FC = () => {

    const keyboard = [7,8,9,4,5,6,1,2,3,0,',']

    return (
        <div className="keyboard__wrapper">
            {keyboard.map((keyItem,index) => (<KeyboardItem value={keyItem} key={index}/>))}
        </div>
    );
};

export default Keyboard;