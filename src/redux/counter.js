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
    const { INCREMENT,DECREMENT } = actions;

    return {
        increment: ()=> dispatch({ type: INCREMENT }),
        decrement: ()=> dispatch({ type: DECREMENT }),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);