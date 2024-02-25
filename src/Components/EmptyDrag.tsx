import React from 'react';
import {useAppSelector} from "../hooks/useAppSelector";

const EmptyDrag:React.FC = () => {

    const {width} = useAppSelector(state => state.width)

    return (
        <>
            <p className="dra__img">
                <img src={require('./Bricks/Group.png')} alt="logo"/>
            </p>
            <div className="drag__text">
                <h1 className="drag__title">
                    Перетащите сюда
                </h1>
                <p className="drag__text-p">
                    любой элемент <br/> из {width <= 420 ? 'верхней' : 'левой'} панели
                </p>
            </div>
        </>
    );
};

export default EmptyDrag;