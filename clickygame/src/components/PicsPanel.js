import React from "react";
import Pictures from "./Pictures";

const PicsPanel = ({ images, pictureRandomized }) => {
    const renderedPictures = images.map(image => {
        return (

            <Pictures
                key={image.id}
                id={image.id}
                name={image.name}
                image={image.image}
                pictureRandomize={pictureRandomized}
            />
        );
    });
    return <div>{renderedPictures}</div>;
};

export default PicsPanel;