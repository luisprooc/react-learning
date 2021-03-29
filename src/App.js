import React  from 'react';
import store from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./redux/reducers/counter"

const App = () => { 


    return(
        <Provider store={store} >
            <Counter />
        </Provider>
    );
};

export default App;

