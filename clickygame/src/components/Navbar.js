import React from "react";

const Navbar = (props) => {
    return (
        <div>
            <nav class="navbar shadow-lg fixed-top navbar-dark bg-dark">
                <div class="navbar-brand text-white font-weight-bold">Clicky Game</div>
                <div class="navbar-brand text-white">{props.message} </div>
                <div class="navbar-brand text-white">Score: {props.score} </div>
                <div class="navbar-brand text-white">Top Score: {props.topScore} </div>
            </nav>

        </div>
    )
};

export default Navbar;