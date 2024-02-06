import React from 'react';

const EmptyDrag:React.FC = () => {
    return (
        <>
            <p className="dra__img">
                <img src={require('./Components/Bricks/Group.png')} alt="logo"/>
            </p>
            <div className="drag__text">
                <h1 className="drag__title">
                    Перетащите сюда
                </h1>
                <p className="drag__text-p">
                    любой элемент <br/> из левой панели
                </p>
            </div>
        </>
    );
};

export default EmptyDrag;