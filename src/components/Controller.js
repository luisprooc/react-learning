import React from 'react';
import { connect } from "react-redux";
import { asyncIncrement } from "../redux/actions";


const Controller = (props) => {
    console.log(props);

    const handler = () => {
        props.dispatch(asyncIncrement(1500));
    };
    
    return (
        <>
            <button onClick={handler}>Dispatch</button>
            <h1>{props.counter }</h1>
        </>
    )
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Controller);