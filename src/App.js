import React, { useReducer } from 'react';

const reducer = ( state,action ) => {

    switch(action.type){
        case "INCREMENT":
            return { ...state, clicks: state.clicks + 1 };

        case "DECREMENT":
            return {...state, clicks: state.clicks - 1 };

        case "CHANGETEXT":
            return {...state, title: action.value };

        default:
            return state
    }
}

const App = () => { 

    const [state, dispatch] = useReducer(reducer,{
        clicks: 0,
        title: "Hola"
    });
    

    const increment = () => dispatch({type: "INCREMENT"});

    const decrement = () => dispatch({type: "DECREMENT"});

    const handlerText = (e) => dispatch({ type: "CHANGETEXT", value:e.target.value });


    return(
        <>  
            <h1>Hook useReducer</h1>
            <p>{state.title} -- {state.clicks}</p>
            <input type="text" onChange={handlerText}/>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Less</button>
        </>
    );
};

export default App;