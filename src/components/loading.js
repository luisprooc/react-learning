import React from "react";
import "../index.css";

const Loading = ({ message = "LOADING ..." }) => (
    <div className="c">
        <div className="square">

        </div>
        <h1 style={{textAlign:"center"}}> {message} </h1>
    </div>
);

export default Loading;