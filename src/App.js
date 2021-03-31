import React  from 'react';
import store from "./redux/store";
import { Provider } from "react-redux";
//import Counter from "./redux/counter"
//import Info from "./redux/info";
import Todo from "./components/Todos/todo"

const App = () => { 


    return(
        <Provider store={store} >
            <Todo />
        </Provider>
    );
};

export default App;

