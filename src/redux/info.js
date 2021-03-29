import React  from 'react';
import { connect } from "react-redux";
import actions from "./actions";

const Info = ( { changeText,user } ) => {

    return (
        <>
            <input
                type="text"
                placeholder="Change user"
                onChange={(e) => changeText(e.target.value)}
            />
            <h1> {user.name} </h1>
        </>
    )
}

const mapStateToProps = (state) => state;
 

const mapDispatchToProps = (dispatch) => {
    const { CHANGETEXT } = actions;

    return {
        changeText: ( value )=> dispatch({ type: CHANGETEXT, value}),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Info);