import React  from 'react';
import store from "./redux/store";
import { Provider } from "react-redux";
//import Counter from "./redux/counter"
//import Info from "./redux/info";
import Fruits from "./redux/fruits";

const App = () => { 


    return(
        <Provider store={store} >
            <Fruits />
        </Provider>
    );
};

export default App;

