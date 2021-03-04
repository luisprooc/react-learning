import React, { useState } from 'react';
import {useSizes} from "./components/hooks";


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

    const [count, setCount] = useState(0);
    console.log(useSizes())


    const handlerClick = () => setCount(count + 1); 
    

    return(
        <>  
            <h1>Hooks personalizados</h1>

        </>
    );
};

export default App;