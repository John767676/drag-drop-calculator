import React, {useEffect, useState} from 'react';

const EmptyDrag:React.FC = () => {

        const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleResize = () => {
                setWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

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
                    любой элемент <br/> из {width <= 480 ? 'верхней' : 'левой'} панели
                </p>
            </div>
        </>
    );
};

export default EmptyDrag;