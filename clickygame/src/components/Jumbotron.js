import React from "react";

const Jumbotron = () => {
    return (
        <div>
            <div className="jumbotron text-white mt-5 bg-info jumbotron-fluid">
                <h1 className="display-4 text-center">Clicky Game!</h1>
                <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    )
}

export default Jumbotron;