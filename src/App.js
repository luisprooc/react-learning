import React, { useState,  useMemo } from 'react';


const SuperList = ({list, log}) => {

    console.log("Render desde SUPERLIST",log);

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

    const list = ["GO","PYTHON","RUST","JS"];

    const handlerClick = () => setCount(count + 1); 
    
    const memoList = useMemo(() => {
        
        return(
            <SuperList
                list={[1,2,3,4,5]}
                log="Memorizado"
            />
        );
    
    }, []);

    return(
        <>  
            <h1>Hook useMemo</h1>

            <button onClick={handlerClick}> COUNT: {count} </button>
            <SuperList
                list={list}
                log="Normal"
            />

            {memoList}
        </>
    );
};

export default App;