import React  from 'react';
import store from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./redux/counter"
import Info from "./redux/info";

const App = () => { 


    return(
        <Provider store={store} >
            <Counter />
            <Info />
        </Provider>
    );
};

export default App;

