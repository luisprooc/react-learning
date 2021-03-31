import React  from 'react';
import { connect } from "react-redux";
import actions from "./actions";

const Counter = ( { counter, increment, decrement } ) => {

    return (
        <>
            <button onClick={increment}>ADD</button>
            <button onClick={decrement}>LESS</button>
            <h1> Clicks: {counter} </h1>
        </>
    )
}

const mapStateToProps = (state) => state;
 

const mapDispatchToProps = (dispatch) => {
    const { COUNTER_INCREMENT,COUNTER_DECREMENT } = actions;

    return {
        increment: ()=> dispatch({ type: COUNTER_INCREMENT }),
        decrement: ()=> dispatch({ type: COUNTER_DECREMENT }),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);