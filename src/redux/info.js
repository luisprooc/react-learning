import React  from 'react';
import { connect } from "react-redux";
import actions from "./actions";

const Info = ( { changeText,user } ) => {

    return (
        <div style={{ background:"#FAF6F6", color: "#2E3140" }}>
            <input
                type="text"
                placeholder="Change user"
                onChange={(e) => changeText(e.target.value)}
            />
            <h1> {user.name} </h1>
            <h5> {user.country} </h5>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};


const mapDispatchToProps = (dispatch) => {
    const { INFO_CHANGETEXT } = actions;

    return {
        changeText: ( name )=> dispatch({ type: INFO_CHANGETEXT, payload: { name }}),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Info);