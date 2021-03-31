import React,{ useRef }  from 'react';
import { connect } from "react-redux";
import actions from "./actions";

const Fruits = ( { fruits, addFruits } ) => {

    const fruitRef = useRef();

    return (
        <div>
            <input
                type="text"
                placeholder="add fruit"
                ref={fruitRef}
            />
            <button onClick={() => addFruits( fruitRef.current.value )}>ADD</button>
            <ul>
                { fruits.map( item => {
                    return (
                        <li key={item}> {item} </li>
                    )
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        fruits: state.fruits
    }
};


const mapDispatchToProps = (dispatch) => {
    const { FRUITS_ADD } = actions;

    return {
        addFruits: ( fruit )=> dispatch({ type: FRUITS_ADD, payload: { fruit }}),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Fruits);