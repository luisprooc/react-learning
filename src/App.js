import React, { useState } from 'react';
import {useHTTP} from "./components/hooks";


const SuperList = ({list}) => {

    return(
        <ul>
            {list.map( item => {

                return(
                    <li key={item}> {item} </li>
                )
            })}
        </ul>
    );
};



const App = () => { 
    const [count, setCount] = useState(1);
    const [res,isFecthing] = useHTTP(`https://jsonplaceholder.typicode.com/todos/${count}`);

    const handlerInput = () => setCount(count + 1);
    
    return(
        <>  
            <h1>Hooks personalizados</h1>
            <button onClick={handlerInput}>ADD</button>
            {isFecthing && <p>LOADNING ...</p>}
            {res?(
                <>
                    <p>{res.title}</p>
                    <p>{res.id}</p>
                </>
            ):null}
        </>
    );
};

export default App;