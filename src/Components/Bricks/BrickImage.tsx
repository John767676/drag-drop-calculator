import React from 'react';

interface BrickImageProps {
    url: string,
    order: number,
    id: string,
}


const BrickImage:React.FC<BrickImageProps> = ({url,order,id}) => {

        return (
            <img src={require(`${url}`)} alt={`${id}`}/>
    );
};

export default BrickImage;