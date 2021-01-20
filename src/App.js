import React,{useState} from 'react';


const ComponentA = ({count,addA}) => {
    return(
        <>
            <button onClick={addA}>A: {count}</button>
        </>
    );
};

const ComponentB = ({count,addB}) => {
    return(
        <>
            <button onClick={addB}>B: {count}</button>
        </>
    );
};




const App = () => { 

    let [countA,saveCountA] = useState(0);
    let [countB,saveCountB] = useState(0);

    const saveA = () => {
        saveCountA(++countA);
    };

    const saveB = () => {
        saveCountB(countB+=2);
    };
    

    return(
        <>  
            <h1>Comunicacion entre hermanos </h1>
            <ComponentA
                count={countA}
                addA={saveB}
            />
            <br/>
            <ComponentB
                count={countB}
                addB={saveA}
            />
        </>
    );
};

export default App;