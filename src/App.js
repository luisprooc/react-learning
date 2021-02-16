import React, { useState,createContext, useLayoutEffect } from 'react';
import Hijo from './components/children';

export const { Provider, Consumer } = createContext();


const App = () => { 

    const [num, setNum] = useState(0);

    const addNum = () => {
        setNum(num + 1);
    }

    return(
        <Provider value={{
            num,
            setNum
        }}>
            <>  
                <h1>Use context</h1>
                <button onClick={addNum}>Clicks: ({num})</button>
                <Hijo />
            </>
        </Provider>
    );
};

export default App;