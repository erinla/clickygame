import React from 'react';
import "./pictures.css";

const Pictures = ({ image, name, pictureRandomize, id }) => {
    return (
        <span>
            <img className="theoffice" src={image} alt={name} onClick={() => pictureRandomize(id)} />
        </span>
    );
};

export default Pictures;