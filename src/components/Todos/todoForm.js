import React  from 'react';
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

const TodoForm = ({ addTodo }) => {

    const handlerSubmit = (e) => {
        e.preventDefault();

        addTodo( {
            text: e.target[0].value,
            id: Math.random().toString(16).substr(2),
            checked: false
        });

        e.target[0].value = "";
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input type="text" />
            <button> ADD </button>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
};


const mapDispatchToProps = (dispatch) => {

    return {
        addTodo: ( todo )=> dispatch(addTodo(todo)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);