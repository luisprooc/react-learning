import React  from 'react';
import { connect } from "react-redux";
import {  updateTodo, deleteTodo } from "../../redux/actions/todoActions";

const TodoList = ( { todo, deleteTodo } ) => (
    <ul>
        {todo.todos.map( todo => {

            return (
                <li key={todo.id}>
                    <input 
                        type="checkbox" 
                        defaultChecked={todo.checked}
                    />
                    
                    <b> {todo.text} </b>
                    <button onClick={() => deleteTodo(todo) }>X</button>
                </li>
            )
        })}
    </ul>
    
)

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
};


const mapDispatchToProps = (dispatch) => {

    return {
        updateTodo: ( todo )=> dispatch(updateTodo(todo)),
        deleteTodo: ( todo )=> dispatch(deleteTodo(todo)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);